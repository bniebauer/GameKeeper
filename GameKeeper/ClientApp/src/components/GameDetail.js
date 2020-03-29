import React, { Component } from 'react';

export class GameDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.game
        };
    }

    render() {
        return <h2>Detail Page</h2>
    }
}