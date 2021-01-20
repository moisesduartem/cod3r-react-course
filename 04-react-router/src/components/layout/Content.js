import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import About from '../../views/About';
import Home from '../../views/Home';
import UserList from '../../views/UserList';

function Content() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/users" component={UserList} />
            </Switch>
        </BrowserRouter>
    )
}

export default Content
