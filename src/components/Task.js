import React from 'react';

function Task({ task, onDelete }) {
  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <div className='task'>
      {task.text} - {task.category}{' '}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;