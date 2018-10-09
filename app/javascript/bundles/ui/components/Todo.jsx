import PropTypes from 'prop-types';
import React from 'react';

// TODO:  Hacked this.  Make the Add component it's own connected component
let inputValue;

const Todo = ({ todos, deleteTodo, addTodo }) => (
  <div>
    <div>
      <input onChange={(event) => inputValue = event.target.value} />
      <button 
        onClick={() => addTodo({ title: inputValue, completed: false })}
      >Add Todo</button>
    </div>
    <table>
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Is Completed</th>
        <th>Delete</th>
      </thead>
      <tbody>
        {todos && todos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? 'Y' : 'N'}</td>
            <td>
              <button onClick={() => deleteTodo(todo)}>
                Delete Todo
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
