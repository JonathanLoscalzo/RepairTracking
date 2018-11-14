import { replace } from 'react-router-redux'
import { toast } from 'react-toastify';

import api from '../../common/api/';

export const REQUEST_REMOVE_TASK = "TASK/REMOVE/REQUEST_TASK"
export const RESPONSE_REMOVE_TASK = "TASK/REMOVE/RESPONSE_TASK"
export const ERROR_REMOVE_TASK = "TASK/REMOVE/ERROR_TASK"

export const LOAD_REMOVE_TASK = "TASK/REMOVE/LOAD_REMOVE_TASK"
export const LOADED_REMOVE_TASK = "TASK/REMOVE/LOADED_REMOVE_TASK"
export const LOADED_ERROR_TASK = "TASK/REMOVE/LOADED_ERROR_TASK"

let initialState = {
    task: null,
    error: null,
    isOpen: false
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case LOAD_REMOVE_TASK:
            return { ...initialState }
        case LOADED_REMOVE_TASK:
            return { ...state, task: action.payload, isOpen: true }
        case LOADED_ERROR_TASK:
            return { ...state, task: null, error: action.error }

        case REQUEST_REMOVE_TASK:
            return { ...state, }
        case RESPONSE_REMOVE_TASK:
            return { ...state, task: null }
        case ERROR_REMOVE_TASK:
            return { ...state, error: action.error }

        default:
            return state;
    }
}

export const load = (id) => (dispatch, state) => {
    dispatch({ type: LOAD_REMOVE_TASK })

    // TODO: TRAERLO DESDE EL BACKEND PARA VALIDAR
    let task = state().task.list.tasks.find(x => x.id === id);

    if (task) {
        dispatch({ type: LOADED_REMOVE_TASK, payload: task })
    } else {
        dispatch(replace('/task'));
        toast.warn("No se puede editar el pedido seleccionado")
    }
}

export const remove = (id) => (dispatch, state) => {
    dispatch({ type: REQUEST_REMOVE_TASK })
    let task = state().task.remove.task;

    api.delete(`task/${task.id}`)
        .then(response => {
            toast.success("tasko eliminado")
            dispatch(replace('/task'));
            dispatch({ type: RESPONSE_REMOVE_TASK, payload: task })
        }).catch(() => {
            toast.error("Error al eliminar pedido")
        })

}

export const goBack = () => dispatch => {
    // TODO: mensaje cancelada
    dispatch({ type: LOAD_REMOVE_TASK })
    dispatch(replace('/task'));
}