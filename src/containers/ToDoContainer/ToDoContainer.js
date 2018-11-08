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
    return <Tasks tasks={this.state.tasks} changeTaskStatus={(id, task) => this.changeTaskStatus(id, task)}/>
  }
}
export default ToDoContainer;