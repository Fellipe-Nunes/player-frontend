import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom' 
import './home.css'
import jwt from 'jsonwebtoken'
import { getToken } from '../../config/auth'



const Home = (props) => {
  const [userIsAdmin, setUserIsAdmin] = useState({})

  const history = useHistory()

  useEffect(() => {
    (async () => {
        const { user } = await jwt.decode(getToken())
        setUserIsAdmin(user.is_admin)
    })()
    return () => { }
}, [])


  return (
    <section className="home">
      <div className="title">
        <h1>Menu principal</h1>
      </div>
      <div className="nav">
        <button className="homeBtn" onClick={() =>history.push('/locais')}><i className="fa fa-map-o i"></i>LOCAIS</button>
        <button className="homeBtn" onClick={() => history.push('/cadastrar-locais')}><i className="fa fa-plus i"></i>NOVO LOCAL</button>
        {userIsAdmin ? (
          <button className="homeBtn" onClick={() => history.push('/usuario')}><i className="fa fa-user-md i"></i>USUÁRIO</button>     

        ): "" }                
           
      </div>
    </section>
  )

}

export default Home