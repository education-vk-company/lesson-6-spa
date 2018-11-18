import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ToDoContainer from './containers/ToDoContainer/ToDoContainer';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import FeedbackContainer from './containers/FeedbackContainer/FeedbackContainer';
import Auth from './containers/Auth/Auth';
import {connect} from "react-redux";
import * as actions from './store/actions';

const About = () => (
  <div>AboutPage</div>
);

class App extends Component {
  componentDidMount() {
     this.props.onTryAutoLogin();
  }
  render() {
    let routes = (
        <Layout>
            <Switch>
                <Route path='/about' exact component={About} />
                <Route path='/login' exact component={Auth} />
                <Redirect to='/about'/>
            </Switch>
        </Layout>
    );

    if(this.props.isAuthed) {
      routes = (
          <Layout>
              <Switch>
                <Route path='/task' component={ToDoContainer} />
                <Route path='/about' exact component={About} />
                <Route path='/feedback' exact component={FeedbackContainer} />
                <Route path='/login' exact component={Auth} />
                  <Redirect to='/about'/>
              </Switch>
          </Layout>
      )
    }

    return (
      <Router>
          {routes}
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthed: state.auth.token !== null,
  }
};

const initMapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(actions.authCheckState()),
  }
};

export default connect(mapStateToProps, initMapDispatchToProps)(App);
