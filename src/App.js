import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ToDoContainer from './containers/ToDoContainer/ToDoContainer';

class App extends Component {
  render() {
    return (
      <Layout>
        <ToDoContainer />
      </Layout>
    );
  }
}

export default App;
