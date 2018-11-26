import Centrifuge from 'centrifuge';
import jwt from 'jsonwebtoken';
import React, {Component} from 'react';
import {connect} from 'react-redux';

const SECRET = '257be2fb-fbe1-4308-87bd-9924b76780ae';

class CentrifugeClass extends Component {

    componentDidMount() {
        const token = jwt.sign({sub: null}, SECRET, {
            expiresIn: 86400,
        });
        const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket');
        centrifuge.setToken(token);
        centrifuge.on('connect', () => {
            console.log('centrifuge connection success');
        });
        centrifuge.subscribe('comments', message => {
            console.log('comment', message);
        });
        centrifuge.connect();
    }



    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect()(CentrifugeClass);
