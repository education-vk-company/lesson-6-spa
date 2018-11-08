import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ToDoContainer from './containers/ToDoContainer/ToDoContainer';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path='' exact component={ToDoContainer} />
        </Layout>
      </Router>
    );
  }
}

export default App;
