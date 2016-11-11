import React, { Component, PropTypes } from 'react';

const propTypes = {
    cardId : PropTypes.number,
    tasks : PropTypes.arrayOf(PropTypes.object),
    taskCallbacks : PropTypes.object
};

const defaultProps = {

};

class CheckList extends Component {

    constructor(props){
        super(props);

        this.checkInputKeyPress = this.checkInputKeyPress.bind(this);
    }

    checkInputKeyPress(event){
        if(event.key === 'Enter'){
            console.log("dd");
            this.props.taskCallbacks.add(this.props.cardId, event.target.value);
            event.target.value = '';
        }
    }

    render() {

        let tasks = this.props.tasks.map((task, taskIndex) => (
            <li className="checklist__task" key={task.id}>
                <input type = "checkbox"
                    defaultChecked = {task.done}
                    onChange = {this.props.taskCallbacks.toggle(null, this.props.cardId, task.Id, taskIndex)}
                    />
                {task.name}
                <a href="#"
                    className="checklist__task--remove"
                    onClick = {this.props.taskCallbacks.delete(null, this.props.cardId, task.id, taskIndex)}
                    />
            </li>
        ));

        return(
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text"
                    className="checklist--add-task"
                    placeholder="Type then hit Enter to add a task"
                    onKeyPress={this.checkInputKeyPress}
                    />
            </div>
        );
    }
}

CheckList.propTypes = propTypes;
CheckList.defaultProps = defaultProps;

export default CheckList;
