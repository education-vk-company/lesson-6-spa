import React from 'react';
import classes from './Tasks.module.css';
import Task from './Task/Task'

const tasks = (props) => {
  console.log(props);
  let taskList = props.tasks.map(task => {
      return (
        <Task key={task.id} task={task} changeTaskStatus={() => props.changeTaskStatus(task.id, task)}/>
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