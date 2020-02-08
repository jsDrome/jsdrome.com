import { createAction, getParameterByName } from '../../utils/helpers';
require('isomorphic-fetch');

export const SET_MESSAGE = 'APP::MESSAGE';
export const SET_CHECKSUM = 'APP::CHECKSUM';
export const SET_LOADING = 'APP::SET_LOADING';
export const SET_CONTENT = 'APP::CONTENT';

export const setMessage = createAction(SET_MESSAGE);
export const setChecksum = createAction(SET_CHECKSUM);
export const setLoading = createAction(SET_LOADING);
export const setContent = createAction(SET_CONTENT);

export const getCheckSum = (body = {}) => (dispatch, getState) => {

  const { app: { checksum } } = getState();
  if (checksum) return;
  dispatch(setLoading(true));

  fetch(`/checksum`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.ok) return response.text();
      throw new Error('Reduced functionality.');
    })
    .then(text => {
      dispatch([
        setChecksum(text),
        setLoading(false),
      ]);
    })
    .catch(err => {
      dispatch([
        setMessage({
          message: err.toString(),
          type: 'warning',
          permanent: true,
        }),
      ]);
    });
};

export const checkPayment = () => async dispatch => {
  const paymentMade = getParameterByName('payment');
  if (paymentMade) {
    if (paymentMade === 'true') {
      dispatch(setMessage({
        message: 'Payment Success!',
        type: 'success',
      }));
    } else if (paymentMade === 'false') {
      dispatch(setMessage({
        message: 'Payment Failure!',
        type: 'error',
      }));
    }
    window.history.replaceState(null, null, window.location.pathname);
  }
};

export const getContent = (folder = 'home', subfolder = 'home', post = 'home') => (dispatch, getState) => {
  const { app: { content } } = getState();

  if (content[`${folder}/${subfolder}/${post}`]) return;

  fetch(`/data?folder=${folder}&subfolder=${subfolder}&post=${post}`)
    .then(response => {
      if(response.ok) return response.text();
      // eslint-disable-next-line no-magic-numbers
      if(response.status === 401) throw new Error('Unauthorized. Please login to view this page.');
      throw new Error('Network Issues.');
    })
    .then(text => {
      content[`${folder}/${subfolder}/${post}`] = text;
      dispatch([
        setContent(content),
      ]);
    })
    .catch(err => {
      dispatch([
        setMessage({
          message: err.toString(),
          type: 'error',
          permanent: true,
        }),
      ]);
    });
};