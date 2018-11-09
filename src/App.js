import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import ToDoContainer from './containers/ToDoContainer/ToDoContainer'
import {BrowserRouter as Router, Route } from 'react-router-dom';
const About = () => (
  <div>About</div>
)
const Tasks = () => (
  <div>Tasks</div>
)


class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path='/about' render={()=> <div>Success</div>} />
          <Route path='/tasks' component={ToDoContainer} />
          {/*<ToDoContainer></ToDoContainer>*/}
        </Layout>
      </Router>
    );
  }
}

export default App;
