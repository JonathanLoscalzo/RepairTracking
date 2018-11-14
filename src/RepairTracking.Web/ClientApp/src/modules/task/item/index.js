import { replace } from 'react-router-redux'
import { toast } from 'react-toastify';

export const LOAD_VIEW_TASK = "TASKS/VIEW/LOAD_VIEW_TASK"
export const LOADED_VIEW_TASK = "TASKS/VIEW/LOADED_VIEW_TASK"
export const LOADED_ERROR_TASK = "TASKS/VIEW/LOADED_ERROR_TASK"

let initialState = {
    task: null,
    loading: true,
    error: null,
    isOpen: false
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case LOAD_VIEW_TASK:
            return { ...initialState }
        case LOADED_VIEW_TASK:
            return { ...state, loading: false, task: action.payload, isOpen: true }
        case LOADED_VIEW_TASK:
            return { ...state, loading: false, task: null, error: action.error }

        default:
            return state;
    }
}

export const load = (id) => (dispatch, state) => {
    dispatch({ type: LOAD_VIEW_TASK })

    // TODO: TRAERLO DESDE EL BACKEND PARA VALIDAR
    let task = state().task.list.tasks.find(x => x.id === id);
    if (task) {
        dispatch({ type: LOADED_VIEW_TASK, payload: task })
    } else {
        // TODO: ERROR. toast
        dispatch(replace('/task'));
        //toast.warn("No se puede editar el pedido seleccionado")
    }
}

export const goBack = () => dispatch => {
    // TODO: mensaje cancelada
    dispatch({ type: LOAD_VIEW_TASK })
    dispatch(replace('/task'));
}