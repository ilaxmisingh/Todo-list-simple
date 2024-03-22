import React from 'react';

function TodoList({ todos, deleteTodo, editTodo, toggleComplete }) {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li key={todo.id} className={`list-group-item ${todo.completed ? 'completed' : ''}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <input
                type="checkbox"
                className="mr-3"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span>{todo.task}</span>
              {todo.priority && <span className={`badge badge-${todo.priority} ml-2`}>{todo.priority}</span>}
              {todo.deadline && <span className="ml-2">Deadline: {todo.deadline}</span>}
            </div>
            <div>
              <button className="btn btn-warning mr-2" onClick={() => editTodo(todo.id, prompt('Edit task:', todo.task), todo.priority, todo.deadline)}>Edit</button>
              <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
