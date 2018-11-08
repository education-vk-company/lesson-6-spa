import React from 'react';
import classes from './Task.module.css';
import { Link, withRouter } from 'react-router-dom'

const task = ({task, changeTaskStatus, match}) => {
  return (
    <div className={classes.TaskContainer}>
      <input id={task.id} onChange={changeTaskStatus} type='checkbox' value={task.isFinished}/>
      <label htmlFor={task.id}><div>{task.text}</div></label>
      <Link to={`${match.path}/task/${task.id}`}>К задаче</Link>
    </div>
  )
};

export default withRouter(task);