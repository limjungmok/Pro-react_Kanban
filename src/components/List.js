import React, { Component, PropTypes } from 'react';
import Card from './Card';

const propTypes = {
    title : PropTypes.string.isRequired,
    cards : PropTypes.arrayOf(PropTypes.object),
    taskCallbacks : PropTypes.object
};

const defaultProps = {
    title : "",
    cards : [ ]
};

class List extends Component {

    render() {
        var cards = this.props.cards.map((card, i) => {
            return (<Card id = {card.id}
                        taskCallbacks = {this.props.taskCallbacks}
                        title = {card.title}
                        description = {card.description}
                        color = {card.color}
                        tasks = {card.tasks}
                        key = {card.id}
                        />);
        });

        return(
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
