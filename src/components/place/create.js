import React, { useState, useEffect } from 'react'
import { CreatePlace, ShowPlace, UpdatePlace } from '../../services/place'
import { useHistory, useParams } from 'react-router-dom'
import Alert from '../alert/index'
import './place.css'

const PlaceCreate = (props) => {
    const [isEdit, setisEdit] = useState(false)
    const { nome } = useParams()
    const history = useHistory()
    const [alert, setAlert] = useState({})
    const method = isEdit ? UpdatePlace : CreatePlace
    const [isSubmit, setIsSubmit] = useState (false)

    const [form, setForm] = useState({
        is_active: true,
        is_admin: false

    })

    useEffect(() => {
        const getShowPlace = async () => {
            const place = await ShowPlace(nome)
            setForm(place.data)
        }
        if (nome) {
            setisEdit(true)
            getShowPlace()            
        }
    }, [nome]

    )

    const handleChange = (event) => {
       
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        return
    }

    const formIsValid = () => {
        return (           
            form.nome
        )
    }

    const submitForm = async (event) => {
        try {
            setIsSubmit(true)
            await method(form)
            
            setForm({
                is_active: true,
                is_admin: false
            })

            setAlert({
                type: "success",
                message: "Local salvo com sucesso!",
                show: true
            })

            setTimeout(() => 
                history.push('/place')
            , 3000);

            
        } catch (error) {
            setAlert({
                type: "error",
                message: "Ocorreu um erro no cadastro...",
                show: true
            })
            setIsSubmit(false)

        }
    }

    
    return (
        <section>
            <div className="title">
                <h1>{isEdit ? 'Editar local' : 'Cadastro de locais'}</h1>
            </div>
            
            <div className="cadastro">
            <Alert type={alert.type || ""} message={alert.message || ""} show={alert.show || false} />                
                <div className="row">
                    <div className="etiqueta">
                        <label htmlFor="nome">Nome:</label>
                    </div>
                    <div className="form-input">
                        <input disabled={isSubmit} className="campo" type="text" name="nome" label="Nome:" onChange={handleChange} value={form.nome || ""} placeholder="Insira o nome do local" autoComplete="false"/>
                    </div>
                </div>
                <div className="row">
                    <button disabled={!formIsValid()} className="btn cadastrar" onClick={submitForm}>{isEdit ? 'EDITAR' : 'CADASTRAR'}</button>
                </div>
                <div className="row">
                    <button className="btn cadastrar" onClick={() => history.goBack()}>CANCELAR</button>
                </div>
            </div>
        </section>
    )
}
export default PlaceCreate
