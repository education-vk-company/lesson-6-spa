import React from 'react';
import classes from './Tasks.module.css';
import Task from './Task/Task';
import TaskInfo from './TaskInfo/TaskInfo';
import { Route, withRouter } from 'react-router-dom';

const tasks = ({tasks, changeStatus, options, match}) =>  {
  const arr = tasks.map(task => {
    return <Task
      changeStatus={() => changeStatus(task.id)}
      key={task.id}
      task={task} />
  });

  return (
    <div>
      <div className={classes.Container}>
        {arr}
      </div>
      <TaskInfo data='123'></TaskInfo>
      <Route path={`${match.path}/:id`} component={TaskInfo}/>
    </div>
  );
};

export default withRouter(tasks);