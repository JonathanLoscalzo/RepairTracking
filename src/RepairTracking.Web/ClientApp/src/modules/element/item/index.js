import { replace } from 'react-router-redux'
import { toast } from 'react-toastify';

export const LOAD_VIEW_ELEMENT = "ELEMENTS/VIEW/LOAD_VIEW_ELEMENT"
export const LOADED_VIEW_ELEMENT = "ELEMENTS/VIEW/LOADED_VIEW_ELEMENT"
export const LOADED_ERROR_ELEMENT = "ELEMENTS/VIEW/LOADED_ERROR_ELEMENT"

let initialState = {
    element: null,
    loading: true,
    error: null,
    isOpen: false
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case LOAD_VIEW_ELEMENT:
            return { ...initialState }
        case LOADED_VIEW_ELEMENT:
            return { ...state, loading: false, element: action.payload, isOpen: true }
        case LOADED_VIEW_ELEMENT:
            return { ...state, loading: false, element: null, error: action.error }

        default:
            return state;
    }
}

export const load = (id) => (dispatch, state) => {
    dispatch({ type: LOAD_VIEW_ELEMENT })

    // TODO: TRAERLO DESDE EL BACKEND PARA VALIDAR
    let element = state().element.list.elements.find(x => x.id === id);

    if (element) {
        dispatch({ type: LOADED_VIEW_ELEMENT, payload: element })
    } else {
        // TODO: ERROR. toast
        dispatch(replace('/element'));
        //toast.warn("No se puede editar el pedido seleccionado")
    }
}

export const goBack = () => dispatch => {
    // TODO: mensaje cancelada
    dispatch({ type: LOAD_VIEW_ELEMENT })
    dispatch(replace('/element'));
}