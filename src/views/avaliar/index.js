import React from 'react'
import Avaliar from './lista'
import { isAuthenticated } from '../../../config/auth'
import  history  from '../../../config/history'

const Avaliacoes = () => {

    const isUser = isAuthenticated()

    return (
            <>
               {isUser
               ? <Avaliar/>
               : history.push('/logar')}   
            </>
    )
}


export default Avaliacoes
