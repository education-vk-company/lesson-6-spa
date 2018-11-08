import React from 'react';

const taskPage = (props) => (
  <div>ID задачи - {props.match.params.id}</div>
);

export default taskPage;