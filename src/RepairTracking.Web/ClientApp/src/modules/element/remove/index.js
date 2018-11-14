import { replace } from 'react-router-redux'
import { toast } from 'react-toastify';

import api from '../../common/api/';

export const REQUEST_REMOVE_ELEMENT = "ELEMENT/REMOVE/REQUEST_ELEMENT"
export const RESPONSE_REMOVE_ELEMENT = "ELEMENT/REMOVE/RESPONSE_ELEMENT"
export const ERROR_REMOVE_ELEMENT = "ELEMENT/REMOVE/ERROR_ELEMENT"

export const LOAD_REMOVE_ELEMENT = "ELEMENT/REMOVE/LOAD_REMOVE_ELEMENT"
export const LOADED_REMOVE_ELEMENT = "ELEMENT/REMOVE/LOADED_REMOVE_ELEMENT"
export const LOADED_ERROR_ELEMENT = "ELEMENT/REMOVE/LOADED_ERROR_ELEMENT"

let initialState = {
    element: null,
    error: null,
    isOpen: false
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case LOAD_REMOVE_ELEMENT:
            return { ...initialState }
        case LOADED_REMOVE_ELEMENT:
            return { ...state, element: action.payload, isOpen: true }
        case LOADED_ERROR_ELEMENT:
            return { ...state, element: null, error: action.error }

        case REQUEST_REMOVE_ELEMENT:
            return { ...state, }
        case RESPONSE_REMOVE_ELEMENT:
            return { ...state, element: null }
        case ERROR_REMOVE_ELEMENT:
            return { ...state, error: action.error }

        default:
            return state;
    }
}

export const load = (id) => (dispatch, state) => {
    dispatch({ type: LOAD_REMOVE_ELEMENT })

    // TODO: TRAERLO DESDE EL BACKEND PARA VALIDAR
    let element = state().element.list.elements.find(x => x.id === id);

    if (element) {
        dispatch({ type: LOADED_REMOVE_ELEMENT, payload: element })
    } else {
        dispatch(replace('/element'));
        toast.warn("No se puede editar el pedido seleccionado")
    }
}

export const remove = (id) => (dispatch, state) => {
    dispatch({ type: REQUEST_REMOVE_ELEMENT })
    let element = state().element.remove.element;

    api.delete(`element/${element.id}`)
        .then(response => {
            toast.success("Elemento eliminado")
            dispatch(replace('/element'));
            dispatch({ type: RESPONSE_REMOVE_ELEMENT, payload: element })
        }).catch(() => {
            toast.error("Error al eliminar pedido")
        })

}

export const goBack = () => dispatch => {
    // TODO: mensaje cancelada
    dispatch({ type: LOAD_REMOVE_ELEMENT })
    dispatch(replace('/element'));
}