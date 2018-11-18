import React, { Component } from 'react';
import Input from '../../components/Input/Input';

class Auth extends Component {
    state={
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Почта'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Пароль'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false,
            },
        }
    };

    checkValidity(value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    };

    inputChangedHandler = (event, key) => {
        const updatedControls = {
            ...this.state.controls,
            [key]: {
                ...this.state.controls[key],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[key].validation),
                touched: true,
            }
        };

        this.setState({ controls: updatedControls });
    };

    render() {
        const formElements = {...this.state.controls};
        const inputs = Object.keys(formElements).map(key => {
            const inputElement = formElements[key];
            return <Input
                key={key}
                elementType={inputElement.elementType}
                elementConfig={inputElement.elementConfig}
                value={inputElement.value}
                invalid={!inputElement.valid}
                touched={inputElement.touched}
                changed={(event)=> this.inputChangedHandler(event, key)}
            />
        });
        return (
            <form onSubmit={this.feedbackHandler}>
                {inputs}
                <button type="submit">
                    Войти
                </button>
            </form>
        );
    }
}

export default Auth;