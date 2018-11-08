import React from 'react';

const tasks = (props) => {
  let taskList = props.tasks.map(task => {
      return (
        <div key={task.id}>{task.text}</div>
      )
    }
  );
  return taskList
};

export default tasks;