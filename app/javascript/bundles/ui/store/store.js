import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import todoListReducer from '../reducers/reducer';

const configureStore = (railsProps) => (
  createStore(todoListReducer, railsProps, applyMiddleware(ReduxThunk))
);

export default configureStore;
