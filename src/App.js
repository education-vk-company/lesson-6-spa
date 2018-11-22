import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ToDoContainer from './containers/ToDoContainer/ToDoContainer';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Auth from './containers/Auth/Auth';

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
          <Route path='/login' exact component={Auth} />
        </Layout>
      </Router>
    );
  }
}

export default App;
