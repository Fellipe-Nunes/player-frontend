import React from 'react'
import { DeletePlace } from '../../../services/place'
import './confirm.css'

const Confirmation = (props) => {
    const deletePlaces = async (value) => {
        if (value) {
            await DeletePlace(props.data.params.nome)
        }
        props.fnc({
            isShow: false,
            params: {}
        })
    }

    return (
        <section className="boxConfirmation">
            <div className="confirmation">
                <div className="msg">Você deseja excluir o local {props.data.params.nome} ?</div>
                <div className="actions">
                    <button className="btnConfirm" onClick={() => deletePlaces(false)}>NÃO</button>
                    <button className="btnConfirm" onClick={() => deletePlaces(true)}>SIM</button>
                
                </div>
            </div>
        </section>
    )


}

export default Confirmation