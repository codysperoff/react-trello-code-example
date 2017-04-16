//list component
import React from 'react';
import Card from './card';

export default function CardList(props) {
    console.log(props);
    console.log(props.cards);
    const list = props.cards.map((card, index) =>
                                 <li key={index}>
                                 <Card text={card} />
                                 </li>
                                );
    return (
        <div className="card-list" >
        <div className="list-title">{props.title}</div>

        <div className="card-contents">
        <ul>
        {list}
        </ul>
        </div>

        <form onSubmit={props.submitHandler} onChange={props.changeHandler}>
        <input type="text" value={props.text} />
        <button type="submit">Submit</button>
        </form>
        </div>
    );
}
