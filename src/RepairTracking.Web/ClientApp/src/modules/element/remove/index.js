import { replace } from 'connected-react-router'
import { toast } from 'react-toastify';

import api from '../../common/api/';

export const REQUEST_REMOVE_ELEMENT = "ELEMENT/REMOVE/REQUEST_ELEMENT"
export const RESPONSE_REMOVE_ELEMENT = "ELEMENT/REMOVE/RESPONSE_ELEMENT"
export const ERROR_REMOVE_ELEMENT = "ELEMENT/REMOVE/ERROR_ELEMENT"

export const LOAD_REMOVE_ELEMENT = "ELEMENT/REMOVE/LOAD_REMOVE_ELEMENT"
export const LOADED_REMOVE_ELEMENT = "ELEMENT/REMOVE/LOADED_REMOVE_ELEMENT"
export const LOADED_ERROR_ELEMENT = "ELEMENT/REMOVE/LOADED_ERROR_ELEMENT"

let initialState = {
    order: null,
    loading: true,
    error: null,
    isOpen: false
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case LOAD_REMOVE_ELEMENT:
            return { ...initialState }
        case LOADED_REMOVE_ELEMENT:
            return { ...state, loading: false, order: action.payload, isOpen: true }
        case LOADED_ERROR_ELEMENT:
            return { ...state, loading: false, order: null, error: action.error }

        case REQUEST_REMOVE_ELEMENT:
            return { ...state, loading: true }
        case RESPONSE_REMOVE_ELEMENT:
            return { ...state, loading: false, order: null }
        case ERROR_REMOVE_ELEMENT:
            return { ...state, loading: false, error: action.error }

        default:
            return state;
    }
}

export const load = (id) => (dispatch, state) => {
    dispatch({ type: LOAD_REMOVE_ORDER })

    // TODO: TRAERLO DESDE EL BACKEND PARA VALIDAR
    let order = state().element.list.elements.find(x => x.id === id);

    if (order) {
        dispatch({ type: LOADED_REMOVE_ORDER, payload: order })
    } else {
        dispatch(replace('/element'));
        toast.warn("No se puede editar el pedido seleccionado")
    }
}

export const remove = (id) => (dispatch, state) => {
    dispatch({ type: REQUEST_REMOVE_ORDER })

    let element = state().order.remove.order;

    api.delete(`element/${element.id}`)
        .then(response => {
            toast.success("Elemento eliminado")
            dispatch(replace('/order'));
            dispatch({ type: RESPONSE_REMOVE_ELEMENT, payload: order })
        }).catch(() => {
            toast.error("Error al eliminar pedido")
        })

    // TODO: caso de error
}

export const goBack = () => dispatch => {
    // TODO: mensaje cancelada
    dispatch({ type: LOAD_REMOVE_ORDER })
    dispatch(replace('/element'));
}