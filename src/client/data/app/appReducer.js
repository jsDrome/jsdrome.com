import { handleActions, updateProperty } from '../../utils/helpers';
import state from '../state';
import {
  SET_MESSAGE,
  SET_CHECKSUM,
  SET_LOADING,
  SET_CONTENT,
} from './appActions';

const setMessage = (state, action) => updateProperty([ 'message' ], action.payload, state);
const setChecksum = (state, action) => updateProperty([ 'checksum' ], action.payload, state);
const setLoading = (state, action) => updateProperty([ 'loading' ], action.payload, state);
const setContent = (state, action) => updateProperty([ 'content' ], action.payload, state);

export default handleActions({
  [SET_MESSAGE]: setMessage,
  [SET_CHECKSUM]: setChecksum,
  [SET_LOADING]: setLoading,
  [SET_CONTENT]: setContent,
}, state.app);
