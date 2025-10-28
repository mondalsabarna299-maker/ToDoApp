import React from 'react';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task._id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem',
            backgroundColor: '#f5f5f5',
            marginBottom: '0.5rem',
            borderRadius: '5px',
          }}
        >
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => onUpdate(task._id, { completed: !task.completed })}
          >
            {task.title}
          </span>
          <button
            style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '0.3rem 0.6rem' }}
            onClick={() => onDelete(task._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
