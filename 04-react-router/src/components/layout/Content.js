import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import About from '../../views/About';
import Home from '../../views/Home';
import NotFound from '../../views/NotFound';
import User from '../../views/User';
import UserList from '../../views/UserList';

function Content() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/users" component={UserList} />
                <Route exact path="/users/:id" component={User} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Content
