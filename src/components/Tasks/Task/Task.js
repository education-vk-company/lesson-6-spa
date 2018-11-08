import React from 'react';
import classes from './Task.module.css';
const task = ({task, changeTaskStatus}) => {
  return (
    <div className={classes.TaskContainer}>
      <input id={task.id} onChange={changeTaskStatus} type='checkbox' value={task.isFinished}/>
      <label htmlFor={task.id}><div>{task.text}</div></label>
    </div>
  )
};

export default task;