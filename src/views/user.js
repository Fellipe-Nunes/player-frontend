//
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout'
import { List as placeList, Create as placeCreate } from '../components/place'
import { List as userList, Create as userCreate } from '../components/user'
import Home from '../components/home'
import jwt from 'jsonwebtoken' 
import { Route } from 'react-router-dom'
import { getToken } from '../config/auth' 


const User = (props) => {
    const [useinfo, setuseinfo] = useState({})
  
    useEffect(() => {
       (async() => {
            const { user } = await jwt.decode(getToken())
            setuseinfo(user)            
            
        })()
    }, [])

    return (
        <Layout info={useinfo}>           
            <Route exact match path={props.match.path} component={Home} />
            <Route exact path={props.match.path + "locais"} component={placeList} />
            <Route exact path={props.match.path + "cadastrar-locais"} component={placeCreate} />
            <Route exact path={props.match.path + "editar-locais/:nome"} component={placeCreate} />
            <Route exact path={props.match.path + "usuario"} component={userList} />
            <Route exact path={props.match.path + "cadastrar-usuario"} component={userCreate} />
            <Route exact path={props.match.path + "editar-usuario/:email"} component={userCreate} />         
        </Layout>
    )
    
}

export default User