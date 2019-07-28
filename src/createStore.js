import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];

export const  createStoreWithMiddlware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddlware(rootReducer);
