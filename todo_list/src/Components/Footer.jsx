import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ itemsLeft, footerBtns,
  handleFooterBtnsFilter, handleFooterBtnDeleteCompleted }) => (

  <footer className="footer">

    <span className="todo-count">
      {itemsLeft.length + ''} items left
    </span>

    <ul className="filters">
      <li>
        <a href="#/"
        className={footerBtns === 'all' ? 'selected' : ''}
        onClick={() => handleFooterBtnsFilter('all')}>
          All
        </a>
      </li>

      <li>
        <a href="#/active"
        className={footerBtns === 'active' ? 'selected' : ''}
        onClick={() => handleFooterBtnsFilter('active')}>
          Active
        </a>
      </li>

      <li>
        <a href="#/completed"
        className={footerBtns === 'completed' ? 'selected' : ''}
        onClick={() => handleFooterBtnsFilter('completed')}>
          Completed
        </a>
      </li>
    </ul>

    <button type="button" className="clear-completed"
    onClick={handleFooterBtnDeleteCompleted}>
      Clear completed
    </button>

  </footer>

);

Footer.propTypes = {
  itemsLeft: PropTypes.array,
  footerBtns: PropTypes.string,
  handleFooterBtnsFilter: PropTypes.func,
};

export default Footer;
