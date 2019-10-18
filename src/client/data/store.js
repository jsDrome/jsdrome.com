import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxMulti from './middlewares/reduxMulti';
import state from './state';

import appReducer from './app/appReducer';

const reducer = combineReducers({
  app: appReducer,
});

const middleware = applyMiddleware(thunk, reduxMulti);

export default middleware(createStore)(reducer, state);
// export default middleware(createStore)(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());