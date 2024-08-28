import React from 'react';

function TaskItem({ id, task, deleteTask }) {
  return (
    <div className="border p-4 mb-2 rounded-xl">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p>{task.description}</p>
      <button
        onClick={() => deleteTask(id)}
        className=" p-1 text-white mt-2 bg-green-500 rounded-xl"
      >
        Trash
      </button>
    </div>
  );
}

export default TaskItem;