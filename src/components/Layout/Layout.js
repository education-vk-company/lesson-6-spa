import React from 'react';
import Aux from '../../hoc/Aux/Aux'

const layout = ({children}) => (
  <Aux>
    <div>
      Header
    </div>
    <main>
      {children}
    </main>
  </Aux>
);
export default layout;