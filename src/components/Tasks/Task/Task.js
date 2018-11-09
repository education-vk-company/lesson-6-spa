import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import {Link, withRouter} from 'react-router-dom';

const task = ({task, changeStatus, match}) => (
  <Aux>
    <input
      type='checkbox'
      onChange={changeStatus}
      value={task.isDone} />
    <Link to={`${match.path}/${task.id}`}>{task.text}</Link>
  </Aux>
);

export default withRouter(task);