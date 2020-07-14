import React, { Component } from 'react';
import './App.css';

import uuid from 'react-uuid';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';

class App extends Component {
  state = {
    todos: [],
    originTodos: [],
    inputValue: '',
    completed: false,
    footerBtns: 'all',
  }

  componentDidMount() {
    this.setState({
      todos: JSON.parse(localStorage.getItem('todos')),
      originTodos: JSON.parse(localStorage.getItem('originTodos')),
    });
  }

  componentDidUpdate() {
    const { todos, originTodos } = this.state;

    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('originTodos', JSON.stringify(originTodos));
  }

  handleChangeValue = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  submitNewTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuid(),
      title: this.state.inputValue,
      completed: this.state.completed,
    };

    if (newTodo.title) {
      this.setState(prevState => ({
        todos: [...prevState.todos, newTodo],
        originTodos: [...prevState.originTodos, newTodo],
        inputValue: '',
      }));
    }
  }

  onChangeCompletedInput = (idTodo) => {
    this.setState((prevState) => {
      const newTodos = prevState.todos
        .map(({ id, completed }) => {
          if (id === idTodo) {
            completed = !completed;
          }

          return id && completed;
        });

      return {
        todos: newTodos,
        originTodos: newTodos,
      };
    });
  }

  onChangeDeleteTodo = (id) => {
    this.setState((prevState) => {
      const filteredIndex = prevState.todos
        .filter(todo => todo.id !== id);

      return {
        todos: filteredIndex,
        originTodos: filteredIndex,
      };
    });
  }

  handleFooterBtnsFilter = (field) => {
    switch (field) {
      case 'completed':
        this.setState(prevState => ({
          todos: prevState.originTodos
            .filter(todo => todo.completed),
          footerBtns: 'completed',
        }));
        break;
      case 'active':
        this.setState(prevState => ({
          todos: prevState.originTodos
            .filter(todo => !todo.completed),
          footerBtns: 'active',
        }));
        break;
      default:
      case 'all':
        this.setState(prevState => ({
          todos: [...prevState.originTodos],
          footerBtns: 'all',
        }));
        break;
    }
  }

  handleFooterBtnDeleteCompleted = () => {
    this.setState((prevState) => {
      const filteredTodo = prevState.originTodos
        .filter(todo => !todo.completed);

      return {
        todos: filteredTodo,
        originTodos: filteredTodo,
      };
    });
  }

  render() {
    const { originTodos, todos, inputValue,
      completed, footerBtns } = this.state;
    const itemsLeft = [...originTodos].filter(todo => !todo.completed);

    return (
      <section className="todoapp">

        <Header
          todos={todos}
          inputValue={inputValue}
          handleChangeValue={this.handleChangeValue}
          submitNewTodo={this.submitNewTodo}
        />

        <TodoList
          todos={todos}
          completed={completed}
          onChangeCompletedInput={this.onChangeCompletedInput}
          onChangeDeleteTodo={this.onChangeDeleteTodo}
        />

        <Footer
          itemsLeft={itemsLeft}
          footerBtns={footerBtns}
          handleFooterBtnsFilter={this.handleFooterBtnsFilter}
          handleFooterBtnDeleteCompleted={this.handleFooterBtnDeleteCompleted}
        />

      </section>
    );
  }
}

export default App;
