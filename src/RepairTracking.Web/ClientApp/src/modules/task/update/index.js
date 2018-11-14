import { replace } from 'react-router-redux'
import { toast } from 'react-toastify';
import { change } from 'redux-form';

import * as _ from 'lodash'
import api from '../../common/api';

export const LOAD_TASK = "TASKS/UPDATE/LOAD_CREATE_TASK"
export const LOADED_TASK = "TASKS/UPDATE/LOADED_CREATE_TASK"

export const REQUEST_UPDATE_TASK = "TASKS/UPDATE/REQUEST_TASKS"
export const RESPONSE_UPDATE_TASKS = "TASKS/UPDATE/RESPONSE_TASKS"
export const ERROR_UPDATE_TASKS = "TASKS/UPDATE/ERROR_TASKS"

const ADD_AUTOCOMPLETE_TASK = "TASKS/UPDATE/ADD_TASK"
const REMOVE_AUTOCOMPLETE_TASK = "TASKS/UPDATE/REMOVE_TASK"

let initialState = {
    task: null,
    loading: true,
    error: null
}

export default function reducer(state = initialState, action = {}) {
    let diff;

    switch (action.type) {
        case LOAD_TASK:
            return { ...state, loading: true }
        case LOADED_TASK:
            return { ...state, loading: false, task: action.payload }

        case ADD_AUTOCOMPLETE_TASK:
            let tasks = state.tasks
            return { ...state, tasks: [...tasks, action.payload] }

        case REMOVE_AUTOCOMPLETE_TASK:
            diff = _.differenceWith(state.tasks, [action.payload], (a, b) => a.id === b.id);
            return { ...state, tasks: diff }

        case REQUEST_UPDATE_TASK:
            return { ...state, loading: true }
        case RESPONSE_UPDATE_TASKS:
            return { ...state, loading: false, task: action.payload }
        case ERROR_UPDATE_TASKS:
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
}

export const addTask = (fields, id) => (dispatch, state) => {
    if (id != -1) {
        const item = state().task.update.tasks.find(x => x.id == id);
        fields.push(item);
        if (item) {
            dispatch(change('task/update', 'task_selectables', '-1'))
            //dispatch({ type: REMOVE_AUTOCOMPLETE_TASK, payload: item })
        }
    }
}

export const update = (task) => (dispatch) => {
    dispatch({ type: REQUEST_UPDATE_TASK })

    api.put(`task/${task.id}`, task)
        .then((response) => {
            dispatch({ type: RESPONSE_UPDATE_TASKS, payload: response.data })
            dispatch(replace('/task'));
            toast.success("Pedido Modificado")
        })
        .catch((error) => {
            dispatch({ type: ERROR_UPDATE_TASKS, error: error })
            toast.error("Error al modificar pedido")
        })
}

export const load = (id) => (dispatch, state) => {

    dispatch({ type: LOAD_TASK })
    let order = state().task.list.tasks.find(x => x.id === id);

    if (order) {
        dispatch({ type: LOADED_TASK, payload: order })
    } else {
        dispatch(replace('/task'));
        toast.warn("No se puede editar el pedido seleccionado")
    }
}

export const goBack = () => dispatch => {
    dispatch(replace('/task'));
    toast.info("Modificación Cancelada")
}