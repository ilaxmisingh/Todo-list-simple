import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task, priority, deadline) => {
    const newTodo = {
      id: uuidv4(),
      task: task,
      priority: priority,
      deadline: deadline,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, updatedTask, updatedPriority, updatedDeadline) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {
        ...todo,
        task: updatedTask,
        priority: updatedPriority,
        deadline: updatedDeadline
      } : todo
    ));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">To Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
