import React, { Component, PropTypes } from 'react';

const propTypes = {
    cardId : PropTypes.number,
    tasks : PropTypes.arrayOf(PropTypes.object)
};

const defaultProps = {

};

class CheckList extends Component {

    render() {

        let tasks = this.props.tasks.map((task) => (
            <li className="checklist__task" key={task.id}>
                <input type = "checkbox" defaultChecked = {task.done} />
                {task.name}
                <a href="#" className="checklist__task--remove"/>
            </li>
        ));

        return(
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}

CheckList.propTypes = propTypes;
CheckList.defaultProps = defaultProps;

export default CheckList;
