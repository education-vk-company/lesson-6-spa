import React, { Component } from 'react';
import Aux from './hoc/Aux/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
        <div>
          Header
        </div>
        <div>
          Body
        </div>
      </Aux>
    );
  }
}

export default App;
