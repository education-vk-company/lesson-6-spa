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
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Ваша почта'
                },
                value: ''
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Ваш телефон'
                },
                value: ''
            }
        }
    };

    inputChangedHandler = (event, key) => {
        const updatedForm = {
            ...this.state.feedbackForm
        };
        const updatedFormElement = {
            ...updatedForm[key],
        };
        updatedFormElement.value = event.target.value;
        updatedForm[key] = updatedFormElement;
        this.setState({
            feedbackForm: updatedForm
        });
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
                changed={(event)=> this.inputChangedHandler(event, key)}
            />
        });
        return (
            <form>
                {inputs}
            </form>
        );
    }
}

export default FeedbackContainer;