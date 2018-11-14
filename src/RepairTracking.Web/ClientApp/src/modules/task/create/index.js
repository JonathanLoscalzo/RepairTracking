import { replace } from 'react-router-redux'
import { toast } from 'react-toastify';
import { change } from 'redux-form';

import * as _ from 'lodash'
import api from '../../common/api';

export const LOAD_TASK = "TASKS/CREATE/LOAD_CREATE_TASK"
export const LOADED_TASK = "TASKS/CREATE/LOADED_CREATE_TASK"

export const REQUEST_CREATE_TASK = "TASKS/CREATE/REQUEST_TASKS"
export const RESPONSE_CREATE_TASKS = "TASKS/CREATE/RESPONSE_TASKS"
export const ERROR_CREATE_TASKS = "TASKS/CREATE/ERROR_TASKS"

const ADD_AUTOCOMPLETE_TASK = "TASKS/CREATE/ADD_TASK"
const REMOVE_AUTOCOMPLETE_TASK = "TASKS/CREATE/REMOVE_TASK"

let initialState = {
    task: { task_selectables: '-1', pieces: [], tasks: [], name: "", brand: "", observations: "" },
    loading: true,
    error: null
}

export default function reducer(state = initialState, action = {}) {
    let diff;

    switch (action.type) {
        case LOAD_TASK:
            return { ...state, loading: true }
        case LOADED_TASK:
            return { ...state, loading: false }

        case ADD_AUTOCOMPLETE_TASK:
            let tasks = state.tasks
            return { ...state, tasks: [...tasks, action.payload] }

        case REMOVE_AUTOCOMPLETE_TASK:
            diff = _.differenceWith(state.tasks, [action.payload], (a, b) => a.id === b.id);
            return { ...state, tasks: diff }

        case REQUEST_CREATE_TASK:
            return { ...state, loading: true }
        case RESPONSE_CREATE_TASKS:
            return { ...state, loading: false }
        case ERROR_CREATE_TASKS:
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
}

// export const addPiece = (fields, id) => (dispatch, state) => {
//     if (id != -1) {
//         const item = state().task.create.pieces.find(x => x.id == id);
//         fields.push(item);
//         if (item) {
//             //dispatch(change('task/create', 'piece_selectables', '-1'))
//             //dispatch({ type: REMOVE_AUTOCOMPLETE_TASK, payload: item })
//         }
//     }
// }

// export const removePiece  = (fields, index, item) => (dispatch, state) => {
//     fields.remove(index);
//     if (item) {
//         //dispatch({ type: ADD_AUTOCOMPLETE_TASK, payload: item })
//     }
// }

export const create = (task) => (dispatch) => {
    dispatch({ type: REQUEST_CREATE_TASK })

    api.post("task", task)
        .then((response) => {
            dispatch({ type: RESPONSE_CREATE_TASKS, payload: response.data })
            dispatch(replace('/task'));
            toast.success("Pedido creado")
        })
        .catch((error) => {
            dispatch({ type: ERROR_CREATE_TASKS, error: error })
            toast.error("Error al crear pedido")
        })
}

export const load = () => dispatch => {
    // dispatch({ type: LOAD_TASK })
    // const url = "TASK"
    // api.get(url)
    //     .then((response) => {
    //         dispatch({ type: LOADED_TASK, payload: response.data })
    //     })
    //     .catch((error) => {
    //         dispatch({ type: ERROR_TASKS, error: "error" })
    //     })
    dispatch({ type: LOADED_TASK })
}

export const goBack = () => dispatch => {
    dispatch(replace('/task'));
    toast.info("Creación cancelada")
}