import { clientHttp } from '../config/config.js'

const CreatePlace = (data) => clientHttp.post(`/place`, data)

const ListPlace = (data) => clientHttp.get(`/place`)

const DeletePlace = (nome) => clientHttp.delete(`/place/${nome}`)

const UpdatePlace = (data) => clientHttp.patch(`/place/${data.nome}`, data)

const ShowPlace = (nome) => clientHttp.get(`/place/${nome}`) 


export {
    CreatePlace,
    ListPlace,
    DeletePlace,
    UpdatePlace,
    ShowPlace
}
