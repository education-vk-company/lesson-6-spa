import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Header from '../Header/Header';

const layout = ({children}) => (
  <Aux>
    <Header />
    <main>{children}</main>
  </Aux>
);

export default layout;