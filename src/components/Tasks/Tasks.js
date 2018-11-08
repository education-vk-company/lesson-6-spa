import React from 'react';
import classes from './Tasks.module.css';
import Task from './Task/Task'

const tasks = (props) => {
  let taskList = props.tasks.map(task => {
      return (
        <Task key={task.id} task={task}/>
      )
    }
  );
  return (
    <div className={classes.TaskList}>
      {taskList}
    </div>
  )
};

export default tasks;