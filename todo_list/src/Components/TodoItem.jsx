import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ id, completed, title,
  onChangeCompletedInput, onChangeDeleteTodo }) => (
  <li className={completed ? 'completed' : 'view'}>
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        id={id}
        completed={completed.toString()}
        onClick={() => onChangeCompletedInput(id)} />

      <label onDoubleClick={() => console.log('double click')}>
        {title}
      </label>

      <button
        type="button"
        className="destroy"
        id={id}
        onClick={() => onChangeDeleteTodo(id)} />
    </div>

    <input type="text" className="edit" id={id} />

  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.object,
  onChangeCompletedInput: PropTypes.func,
  onChangeDeleteTodo: PropTypes.func,
};

export default TodoItem;
