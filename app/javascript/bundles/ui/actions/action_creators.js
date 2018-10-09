/* eslint-disable import/prefer-default-export */

import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO
} from '../constants/constants';

// TODO:  Move the data calls elsewhere

export const getTodos = () => {
  return (dispatch) => {
    return fetchTodos().then((todos) => {
      dispatch({
        type: GET_TODOS,
        value: todos
      });
    });
  };
};

export const addTodo = (value) => (dispatch) => (
  addNewTodo(value)
    .then((result) => result.json())
    .then(newTodo => {
      dispatch({
        type: ADD_TODO,
        value: newTodo
      });
    })
);

export const deleteTodo = (value) => {
  return (dispatch) => {
    return deleteTodoById(value.id).then(() => {
      dispatch({
        type: DELETE_TODO,
        value: value
      });
    });
  };
};

const API_ROOT = 'http://localhost:3000/api/todos';

function fetchTodos() {
  return fetch(API_ROOT);
};

function addNewTodo(todo) {
  return fetch(API_ROOT, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(todo)
  });
}

function deleteTodoById(id) {
  return fetch(`${API_ROOT}/${id}`, {
    method: 'DELETE'
  });
}