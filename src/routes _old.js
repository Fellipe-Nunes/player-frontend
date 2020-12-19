import React from 'react'
import UserList from './components/user/lista'
import UserCreate from './components/user/create'
import Login from './components/login/login'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"


const Routers = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/list" component={UserList}/>
            <Route exact path="/new" component={UserCreate}/>
            <Route exact path="/update/:email" component={UserCreate}/>
            <Route exact path="*" component={() => (<h1>404 | Not Found</h1>)} />
        </Switch>
    </Router>
)

export default Routers
