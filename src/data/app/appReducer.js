import { handleActions, updateProperty } from '../../utils/helpers';
import state from '../state';
import {
  SET_CONTENT,
  SET_MESSAGE,
  SET_CHECKSUM,
  SET_LOADING,
} from './appActions';

const setContent = (state, action) => updateProperty([ 'content' ], action.payload, state);
const setMessage = (state, action) => updateProperty([ 'message' ], action.payload, state);
const setChecksum = (state, action) => updateProperty([ 'checksum' ], action.payload, state);
const setLoading = (state, action) => updateProperty([ 'loading' ], action.payload, state);

export default handleActions({
  [SET_CONTENT]: setContent,
  [SET_MESSAGE]: setMessage,
  [SET_CHECKSUM]: setChecksum,
  [SET_LOADING]: setLoading,
}, state.app);
