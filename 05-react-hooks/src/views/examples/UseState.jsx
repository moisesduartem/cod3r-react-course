import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle'

const UseState = (props) => {

    const initialValue = 0;

    const [myState, setMyState] = useState(initialValue)

    return (
        <div className="UseState">
            <h1>{myState}</h1>

            <button className="btn" onClick={(e) => setMyState(myState + 1)}>+</button>
            <button className="btn" onClick={(e) => setMyState(myState - 1)}>-</button>
            <button className="btn" onClick={(e) => setMyState(initialValue)}>C</button>

            <hr />

            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
        </div>
    )
}

export default UseState
