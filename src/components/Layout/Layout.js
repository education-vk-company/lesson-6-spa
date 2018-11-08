import React from 'react';
import Aux from '../../hoc/Aux/Aux'
import classes from './Layout.module.css';
import Header from './../Header/Header'

const layout = ({children}) => (
  <Aux>
    <Header />
    <main className={classes.Content}>
      {children}
    </main>
  </Aux>
);
export default layout;