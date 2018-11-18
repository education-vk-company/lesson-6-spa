import React, { Component } from 'react';
import Input from '../../components/Input/Input';

class FeedbackContainer extends Component {
    state = {
        feedbackForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Ваше имя'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Ваша почта'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Ваш телефон'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                },
                valid: false,
                touched: false,
            }
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
        const updatedForm = {
            ...this.state.feedbackForm
        };
        const updatedFormElement = {
            ...updatedForm[key],
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        console.log(updatedFormElement);
        updatedForm[key] = updatedFormElement;
        this.setState({
            feedbackForm: updatedForm
        });
    };

    feedbackHandler = (event) => {
        event.preventDefault();
        console.log(event);

        const formData = Object.keys(this.state.feedbackForm).reduce((res, key) => {
            res[key] = this.state.feedbackForm[key].value;
            return res;
        }, {});
        console.log(formData);
    };


    render () {
        const formElements = {...this.state.feedbackForm};
        const inputs = Object.keys(this.state.feedbackForm).map(key => {
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
                    Отправить
                </button>
            </form>
        );
    }
}

export default FeedbackContainer;