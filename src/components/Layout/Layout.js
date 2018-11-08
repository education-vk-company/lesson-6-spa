import React from 'react';
import Aux from '../../hoc/Aux/Aux'
import classes from './Layout.module.css';

const layout = ({children}) => (
  <Aux>
    <div>
      Header
    </div>
    <main className={classes.Content}>
      {children}
    </main>
  </Aux>
);
export default layout;