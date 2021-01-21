import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle'

const classes = {
    button: {
        width: 50,
        height: 50,
        fontSize: 14
    }
};

const UseState = (props) => {

    const initialValue = 0;

    const [myState, setMyState] = useState(initialValue)
    const [myText, setMyText] = useState('');

    return (
        <div className="UseState">

            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <h1>Exercício #01</h1>

            <hr />

            <h1>{myState}</h1>

            <div>
                <button style={classes.button} onClick={(e) => setMyState(myState + 1)}>+</button>
                <button style={classes.button} onClick={(e) => setMyState(myState - 1)}>-</button>
                <button style={classes.button} onClick={(e) => setMyState(initialValue)}>C</button>
            </div>
            <h1>Exercício #02</h1>

            <hr />

            <input onChange={(e) => { setMyText(e.target.value) }} placeholder="Digite alguma coisa" />
            <span style={{ color: 'red' }}>{myText}</span>

        </div>
    )
}

export default UseState
