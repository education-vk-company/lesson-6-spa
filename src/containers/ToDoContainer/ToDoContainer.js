import React, { Component } from 'react';
import Tasks from '../../components/Tasks/Tasks'
import { Route } from 'react-router-dom';
import TaskPage from '../../components/Tasks/TaskPage/TaskPage';
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';


class ToDoContainer extends Component {
  state = {
    tasks: ToDoContainer.createTasks()
  };

  constructor(props) {
    super(props)
  }

  static createTasks() {
    return new Array(15).fill(null).map((item, index) => {
      return {
        id: index,
        isFinished: false,
        text: `Новая задача ${index}`
      }
    })
  };

  changeTaskStatus = (id) => {
    const modifiedTasksId = this.state.tasks.findIndex(item => {
      return item.id === id;
    });
    const tasks = [...this.state.tasks];

    tasks[modifiedTasksId].isFinished= !tasks[modifiedTasksId].isFinished;

    this.setState({
      tasks
    });

    console.log(tasks);
  };

  render() {
    console.log(this.props);
    let authRedirect = null;
    if(!this.props.isAuthenticated) {
      authRedirect = <Redirect to="/"/>
    }

    return (
      <div>
        <Tasks tasks={this.state.tasks} changeTaskStatus={(id, task) => this.changeTaskStatus(id, task)}/>
        <Route path='/task/:id' exact component={TaskPage} />
          {authRedirect}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
};

export default connect(mapStateToProps)(ToDoContainer);