import {React, useState} from 'react'

import { HeaderBar } from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';
function App({addtask}) {

  const [tasks, settasks] = useState([]);

  const addTask = (task) => {
    settasks([...tasks, task]);
  };

  const deletetask = (id) => {
    settasks(tasks.filter((task, index) => index !== id));
  };
  return(
    <>
      <HeaderBar/>
      <div className="flex flex-col md:flex-row">
          <div className="md:w-9/12">
            <TaskInput addTask={addtask} />
            <TaskList task={tasks} deleteTask={deletetask} />
          </div>
      </div>
    </>
  );
}

export default App;
