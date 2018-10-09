import { combineReducers } from 'redux';
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO
} from '../constants/constants';

const initialState = {
  todoList: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.value;
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.value]
      };
    case DELETE_TODO:
     return {
      ...state,
      todoList: [...state.todoList.filter(todo => todo.id !== action.value.id)]
     };
    default:
      return state;
  }
};

const todoListReducer = combineReducers({ todos });

export default todoListReducer;
