import React from 'react';
import { withRouter } from 'react-router-dom'

const taskInfo = (props) => {
  console.log('12', props);
  return <div>{props.match.params.id}</div>
};

export default withRouter(taskInfo);