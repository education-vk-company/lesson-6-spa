import React, { Component } from 'react';
import {connect} from 'react-redux';

const URL_ADDRESS = 'ws://localhost:8080';

class Socket extends Component {
    state = {
        socket: new WebSocket(URL_ADDRESS),
    };
    componentDidMount() {
        this.connectToSocket();
    };
    connectToSocket() {
        this.state.socket.onopen = () => {
            console.log('connected');
        };
        this.state.socket.onmessage = (message) => {
            const response = JSON.parse(message.data);
            switch (response.type) {
                case 'newComment':
                    this.newCommentHandler(response.data);
                    break;
                default:
                    return;
            }
            console.log('message ->', );
        };
        this.state.socket.onerror = (error) => {
            console.log('Ошибка', error.type);
        };
        this.state.socket.onclose = () => {
            console.log('Соединение закрыто');
        };
    }
    newCommentHandler(comment) {
        this.props.onNewMessage(comment);
    }
    render() {
        if(this.props.newComment) {
            const data = JSON.stringify(this.props.newComment);
            this.state.socket.send(data);
        }

        return null;
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onNewMessage: (message) => dispatch({
            type: 'NewMessage',
            payload: message
        })
    }
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        newComment: state.comments.newComment,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Socket);