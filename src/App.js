import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ToDoContainer from './containers/ToDoContainer/ToDoContainer';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const About = () => (
  <div>AboutPage</div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path='/task' component={ToDoContainer} />
          <Route path='/about' exact component={About} />
        </Layout>
      </Router>
    );
  }
}

export default App;
