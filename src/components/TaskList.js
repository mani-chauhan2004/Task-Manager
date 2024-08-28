import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem> key={index} id={index} task={task} deleteTask={deleteTask}</TaskItem>
      ))}
    </div>
  );
}

