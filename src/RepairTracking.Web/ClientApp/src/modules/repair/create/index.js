import { replace, go, push } from 'react-router-redux'
import { toast } from 'react-toastify';
import { change } from 'redux-form';

import * as _ from 'lodash'
import api from '../../common/api';

export const LOAD_REPAIR = "REPAIRS/CREATE/LOAD_CREATE_REPAIR"
export const LOADED_REPAIR = "REPAIRS/CREATE/LOADED_CREATE_REPAIR"

export const REQUEST_CREATE_REPAIR = "REPAIR/CREATE/REQUEST_REPAIRS"
export const RESPONSE_CREATE_REPAIRS = "REPAIR/CREATE/RESPONSE_REPAIRS"
export const ERROR_CREATE_REPAIRS = "REPAIRS/CREATE/ERROR_REPAIRS"

let initialState = {
    code: '',
    loading: true,
    error: null
}

export default function reducer(state = initialState, action = {}) {
    let diff;

    switch (action.type) {
        case LOAD_REPAIR:
            return { ...state, loading: true }
        case LOADED_REPAIR:
            return { ...state, loading: false }
        case REQUEST_CREATE_REPAIR:
            return { ...state, loading: true }
        case RESPONSE_CREATE_REPAIRS:
            return { ...state, loading: false, code: action.code }
        case ERROR_CREATE_REPAIRS:
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
}

export const create = (repair, id) => (dispatch) => {
    console.log(repair);
    dispatch({ type: REQUEST_CREATE_REPAIR })
    //repair.element = "2db43ebf-419e-4d6b-853d-daf289fa9dd0";
    repair.client = id;

    api.post("repair", repair)
        .then((response) => {
            dispatch({ type: RESPONSE_CREATE_REPAIRS, code: response.data })
            toast.success("Pedido creado")
        })
        .catch((error) => {
            dispatch({ type: ERROR_CREATE_REPAIRS, error: error })
            toast.error("Error al crear pedido")
        })
}

export const load = () => dispatch => {
    // dispatch({ type: LOAD_REPAIR })
    // const url = "element"
    // api.get(url)
    //     .then((response) => {
    //         dispatch({ type: LOADED_REPAIR, payload: response.data })
    //     })
    //     .catch((error) => {
    //         dispatch({ type: ERROR_ELEMENTS, error: "error" })
    //     })
    dispatch({ type: LOADED_REPAIR })
}

export const goBack = () => dispatch => {
    dispatch(go(-1));
    toast.info("Creación cancelada")
}

export const goToNew = (id) => dispatch =>{
    dispatch(push('/repair/new/' + id));
}