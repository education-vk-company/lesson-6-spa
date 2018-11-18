import React, { Component } from 'react';
import Input from '../../components/Input/Input';

class FeedbackContainer extends Component {
    render () {
        return (
            <form>
                <Input inputType='input' type="text" name="name" placeholder="Ваше имя"/>
                <Input inputType='input' type="email" name="email" placeholder="Почта"/>
                <Input inputType='input' type="text" name="phone" placeholder="Телефон"/>
            </form>
        );
    }
}

export default FeedbackContainer;