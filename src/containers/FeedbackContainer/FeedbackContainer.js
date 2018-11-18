import React, { Component } from 'react';
import Input from '../../components/Input/Input';

class FeedbackContainer extends Component {
    render () {
        return (
            <form>
                <Input inputtype='input' type="text" name="name" placeholder="Ваше имя"/>
                <Input inputtype='input' type="email" name="email" placeholder="Почта"/>
                <Input inputtype='input' type="text" name="phone" placeholder="Телефон"/>
            </form>
        );
    }
}

export default FeedbackContainer;