import React, { Component, PropTypes } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type' : 'application/json',
    Authorization : 'any-string-you-like'
};

class KanbanBoardContainer extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            cards : []
        };

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
    }

    componentDidMount(){
        fetch(API_URL + '/cards', {headers : API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({cards : responseData});
        })
        .catch((error) =>{
            console.log('Error fetching and parsing data', error);
        });
    }

    addTask(cardId, taskName){

    }

    deleteTask(cardId, taskId, taskIndex){
        //카드 인덱스 찾기
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);

        let nextState = update(this.state.cards, {
            [cardIndex] : {
                tasks : { $splice : [[taskIndex, 1]] }
            }
        });

        this.setState({cards : nextState});

        fetch('${API_URL}/cards/${cardId}/tasks/${taskId}', {
            method : 'delete',
            headers : API_HEADERS
        });
    }

    toggleTask(cardId, taskId, taskIndex){
        //카드 인덱스 찾기
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
    }

    render() {
        return(
            <KanbanBoard cards = {this.state.cards}
                taskCallbacks = {
                    {toggle : this.toggleTask, delete : this.deleteTask, add : this.addTask}
                }/>
        );
    }
}

export default KanbanBoardContainer;
