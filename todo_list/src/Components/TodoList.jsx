import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onChangeCompletedInput,
  onChangeDeleteTodo }) => (
  <section className="main">
    <input type="checkbox" id="toggle-all" className="toggle-all" />
    <label htmlFor="toggle-all">Mark all as complete</label>

    <ul className="todo-list">

      {todos.map(({ id, completed, title }) => (
        <TodoItem key={id} completed={completed}
        title={title} id={id}
        onChangeCompletedInput={onChangeCompletedInput}
        onChangeDeleteTodo={onChangeDeleteTodo} />
      ))}

      {/* <li className="editing">
            <div className="view">
              <input type="checkbox" className="toggle" id="todo-3" />
              <label htmlFor="todo-3">zxcvbnm</label>
              <button type="button" className="destroy" />
            </div>
            <input type="text" className="edit" />
          </li> */}
    </ul>
  </section>
);

TodoList.propTypes = {
  todos: PropTypes.array,
  onChangeCompletedInput: PropTypes.func,
  onChangeDeleteTodo: PropTypes.func,
};

export default TodoList;
