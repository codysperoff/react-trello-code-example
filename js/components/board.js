import React from 'react';
import ListContainer from './list-container';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            changed: false,
            submitted: false
        };
    }

    render() {
        return (
            <div className="board">
            <div className="board-title">{this.props.title}</div>
            <ListContainer title="Card List" />
            </div>
        );
    }
}
