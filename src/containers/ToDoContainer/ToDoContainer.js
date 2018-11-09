import React, {Component} from 'react';
import Tasks from '../../components/Tasks/Tasks';

class ToDoContainer extends Component {
  state = {
    list: ToDoContainer.createTasks(),
    options: {
      display: 'none',
      textColor: 'black'
    }
  };

  constructor(props) {
    super(props);
  }

  changeStatusOfTask = (id) => {
    const taskIndex = this.state.list.findIndex(item => {
      return item.id === id
    });

    const list = [...this.state.list];
    list[taskIndex].isDone = !list[taskIndex].isDone;

    this.setState({list});
    console.log(this.state);
  };

  static createTasks() {
    return new Array(15).fill(null).map((_, index) => {
      return {
        id: index,
        text: `Новая задача ${index}`,
        isDone: false,
      }
    })
  }

  render() {
    return (
      <Tasks
        changeStatus={(id) => {this.changeStatusOfTask(id)}}
        tasks={this.state.list}
        options={this.state.options}
      ></Tasks>
    )
  }
}

export default ToDoContainer;