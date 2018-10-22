import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/home'
import ClienteCrud from '../components/clients/ClienteCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/clientes' component={ClienteCrud} />
        <Redirect from='*' to='/' />
    </Switch>

