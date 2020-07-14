import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ inputValue, handleChangeValue, submitNewTodo }) => (
  <header className="header">
    <h1>todos</h1>

    <form onSubmit={submitNewTodo}>
      <input
        className="new-todo"
        value={inputValue}
        placeholder="What needs to be done?"
        pattern="[^\s]+"
        onChange={handleChangeValue}
      />
    </form>
  </header>
);

Header.propTypes = {
  inputValue: PropTypes.string,
  handleChangeValue: PropTypes.func,
  submitNewTodo: PropTypes.func,
};

export default Header;
