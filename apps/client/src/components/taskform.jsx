import React, { useState } from 'react';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDuration, setTaskDuration] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Task Name:', taskName);
    console.log('Task Duration:', taskDuration);
    console.log('Task Date:', taskDate);

    setTaskName('');
    setTaskDuration('');
    setTaskDate('');
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <div className='form-inputs'>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
          placeholder='input task name'
        />
      </div>

      <div className='form-inputs'>
        <label htmlFor="taskDuration">Task Duration:</label>
        <input
          type="text"
          id="taskDuration"
          value={taskDuration}
          onChange={(e) => setTaskDuration(e.target.value)}
          required
          placeholder='input task duration'
        />
      </div>

      <div className='form-inputs'>
        <label htmlFor="taskDate">Date of Adding Task:</label>
        <input
          type="date"
          id="taskDate"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          required
        />
      </div>
      
      <div className='form-inputs'>
        <label htmlFor="taskDuration">Task assigned to</label>
        <input
          type="text"
          id="taskDuration"
          value={taskDuration}
          onChange={(e) => setTaskDuration(e.target.value)}
          required
          placeholder='input assignee email'
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;