import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task, priority, deadline);
    setTask('');
    setPriority('medium');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          className="form-control"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <input
          type="date"
          className="form-control"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
