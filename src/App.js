import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ToDoContainer from './containers/ToDoContainer/ToDoContainer';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import FeedbackContainer from './containers/FeedbackContainer/FeedbackContainer';
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
          <Route path='/feedback' exact component={FeedbackContainer} />
        </Layout>
      </Router>
    );
  }
}

export default App;
