import React, { Component } from 'react';
import Input from './../../components/Input/Input';

class Auth extends Component {
  state = {
    loginForm: {
      login: {
        elementType: 'input',
        value: '',
      },
      password: {
        elementType: 'input',
        value: '123',
      }
    }
  };

  handleInput = (event, key) => {
    const newFormData = {
      ...this.state.loginForm
    };
    const inputData = {
      ...this.state.loginForm[key],
    };

    inputData.value = event.target.value;
    
    newFormData[key] = inputData;
    this.setState({
      loginForm: newFormData
    });
  };

  render() {
    const inputs = Object
      .keys(this.state.loginForm)
      .map(key => {
        const element = this.state.loginForm[key];
        return <Input
          key={key}
          elementType={element.elementType}
          value={element.value}
          changed={(event) => this.handleInput(event, key)}
          placeholder="Введите логин" />
      });

    return (
      <div>
        {inputs}
      </div>
    );
  }
}

export default Auth;