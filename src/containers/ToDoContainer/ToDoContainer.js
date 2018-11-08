import React, { Component } from 'react';
import Tasks from '../../components/Tasks/Tasks'
class ToDoContainer extends Component {
  state = {
    tasks: this.createTasks()
  };

  createTasks() {
    return new Array(15).fill(null).map((item, index) => {
      return {
        id: index,
        isFinished: false,
        text: `Новая задача ${index}`
      }
    })
  };

  render() {
    return <Tasks tasks={this.state.tasks} />
  }
}
export default ToDoContainer;