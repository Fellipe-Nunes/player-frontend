import React from 'react'
import { isAuthenticated } from '../../../config/auth'
import history from '../../../config/history'
import MinhasAvaliacoes from './lista'


const Avaliacoes = () => {

    const isUser = isAuthenticated()

    return (
        <>
            {isUser
                ? <MinhasAvaliacoes />
                : history.push('/')}
        </>
    )
}



export default Avaliacoes
