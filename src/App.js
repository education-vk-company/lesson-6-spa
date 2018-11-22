import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ToDoContainer from './containers/ToDoContainer/ToDoContainer';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import {connect} from 'react-redux';
import * as actions from './store/actions';

const About = () => (
  <div>AboutPage</div>
);

class App extends Component {
  componentDidMount() {
    this.props.checkToken();
  }

  render() {
    let route =
      (
        <Switch>
          <Route path='/about' exact component={About} />
          <Route path='/login' exact component={Auth} />
          <Redirect to='/about'></Redirect>
        </Switch>
      )
  ;
    if(this.props.token) {
      route = (
        <Switch>
          <Route path='/task' component={ToDoContainer} />
          <Route path='/login' exact component={Auth} />
          <Route path='/about' exact component={About} />
          <Redirect to='/about'></Redirect>
        </Switch>
      )
    };
    return (
      <Router>
        <Layout>
          {route}
        </Layout>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
};

const mapDispatchToProps = (dispatch) => {
  return  {
    checkToken: () => dispatch(actions.authCheckState())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
