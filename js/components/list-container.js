//list container component
import React from 'react';
import CardList from './list';

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cards: []
        };
        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
        this.render = this.render.bind(this);
        this.title = props.title;
    }
    onAddSubmit(event) {
        event.preventDefault();
        var newCardsArray = this.state.cards.slice();
        var cardText = this.state.text;
        newCardsArray.push(cardText);
        this.setState({
            submitted: true,
            cards: newCardsArray
        });
    }
    onAddInputChanged(event) {
        this.setState({
            text: event.target.value,
        });
    }
    render() {
        return (
            <div className='list-container'>
            <CardList title={this.title} cards={this.state.cards}
            submitHandler={this.onAddSubmit} changeHandler={this.onAddInputChanged}/>
            </div>
        );
    }
}
