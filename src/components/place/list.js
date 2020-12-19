import React, { useEffect, useState } from 'react'
import { ListPlace } from '../../services/place'
import { useHistory } from 'react-router-dom'
import Loading from '../loading/loading'
import Confirmation from '../alert/confirmation/place'
import './place.css'
import iconEdit from '../../assets/img/edit.svg'
import iconDelete from '../../assets/img/user-delete.svg'

const ListPlaces = (props) => {
    const [place, setPlace] = useState([])
    const [loading, setLoading] = useState(false)
    const [confirmation, setConfirmation] = useState({
        isShow: false,
        params: {}
    })

    const getList = async () => {
        try {
            setLoading(true)
            const place = await ListPlace()
            if (place) {
                setPlace(place.data)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const history = useHistory()

    const editPlace = (place) => props.history.push(`/editar-local/${place.nome}`)

    const deletePlace = (user) => setConfirmation({
        isShow: true,
        params: user
    })

    const verifyIsEmpty = place.length === 0

    const montarLista = () => {
        const row = place.map((place, index) => (
            <tr key={index}>
                <td>{place.nome}</td>
                <td>
                    <img src={iconEdit} className="iconEdit" alt="Editar" onClick={() => editPlace(place)} />
                    <img src={iconDelete} className="iconDelete" alt="Excluir" onClick={() => deletePlace(place)} />
                </td>
            </tr>
        ))


        return !verifyIsEmpty ? (
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        ) : ""


    }

    useEffect(function () {
        getList()
    }, [])

    useEffect(function () {
        getList()
    }, [confirmation])


    return (
        <section className="sectionList">
            <div className="title">
                <h1>Lista de lugares</h1>
            </div>
            
                {confirmation.isShow ? (
                    <Confirmation data={confirmation} fnc={setConfirmation} />
                ) : (
                    <div className="listaPlace">
                <nav>
                    <div className="action">
                        <button className="btnNavList" name="adicionar" onClick={() => history.push('/')}><i className="fa fa-th-list iconsNav"></i>MENU</button>
                        <button className="btnNavList" name="adicionar" onClick={() => history.push('/cadastrar-local')}><i className="fa fa-plus iconsNav"></i>NOVO</button>
                    </div>
                </nav>
                        <section>
                            <div className="list_place">
                            <Loading show={loading} />
                            {montarLista()}
                            </div>
                        </section>
                        </div>
                    )}
            
        </section>
    )
}

export default ListPlaces
