import React, { Component, PropTypes } from 'react';
import List from './List';

const propTypes = {
    cards : PropTypes.arrayOf(PropTypes.object),
    taskCallbacks : PropTypes.object
};

const defaultProps = {

};

class KanbanBoard extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="app">
                <List id ="todo"
                    title="To Do"
                    taskCallbacks = {this.props.taskCallbacks}
                    cards={this.props.cards.filter((card) => card.status === "todo")}
                />
                <List id ="in-progress"
                    title="In Progress"
                    taskCallbacks = {this.props.taskCallbacks}
                    cards={this.props.cards.filter((card) => card.status === "in-progress")}
                />
                <List id ="done"
                    title="Done"
                    taskCallbacks = {this.props.taskCallbacks}
                    cards={this.props.cards.filter((card) => card.status === "done")}
                />
            </div>
        );
    }
}

KanbanBoard.propTypes = propTypes;
KanbanBoard.defaultProps = defaultProps;

export default KanbanBoard;
