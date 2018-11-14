import { replace } from 'react-router-redux'
import { toast } from 'react-toastify';
import { change } from 'redux-form';

import * as _ from 'lodash'
import api from '../../common/api';

export const LOAD_ELEMENT = "ELEMENTS/CREATE/LOAD_CREATE_ELEMENT"
export const LOADED_ELEMENT = "ELEMENTS/CREATE/LOADED_CREATE_ELEMENT"

export const REQUEST_CREATE_ELEMENT = "ELEMENTS/CREATE/REQUEST_ELEMENTS"
export const RESPONSE_CREATE_ELEMENTS = "ELEMENTS/CREATE/RESPONSE_ELEMENTS"
export const ERROR_CREATE_ELEMENTS = "ELEMENTS/CREATE/ERROR_ELEMENTS"

const ADD_AUTOCOMPLETE_TASK = "ELEMENTS/CREATE/ADD_TASK"
const REMOVE_AUTOCOMPLETE_TASK = "ELEMENTS/CREATE/REMOVE_TASK"

let initialState = {
    element: { task_selectables: '-1', pieces: [], tasks: [], name: "", brand: "", observations: "" },
    pieces: [{ value: '-1', label: 'Elija una opción' }],
    tasks: [{ value: '-1', label: 'Elija una opción' }],
    loading: true,
    error: null
}

export default function reducer(state = initialState, action = {}) {
    let diff;

    switch (action.type) {
        case LOAD_ELEMENT:
            return { ...state, loading: true }
        case LOADED_ELEMENT:
            return { ...state, loading: false }

        case ADD_AUTOCOMPLETE_TASK:
            let tasks = state.tasks
            return { ...state, tasks: [...tasks, action.payload] }

        case REMOVE_AUTOCOMPLETE_TASK:
            diff = _.differenceWith(state.tasks, [action.payload], (a, b) => a.id === b.id);
            return { ...state, tasks: diff }

        case REQUEST_CREATE_ELEMENT:
            return { ...state, loading: true }
        case RESPONSE_CREATE_ELEMENTS:
            return { ...state, loading: false }
        case ERROR_CREATE_ELEMENTS:
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
}

export const addTask = (fields, id) => (dispatch, state) => {
    if (id != -1) {
        const item = state().element.create.tasks.find(x => x.id == id);
        fields.push(item);
        if (item) {
            dispatch(change('element/create', 'task_selectables', '-1'))
            //dispatch({ type: REMOVE_AUTOCOMPLETE_TASK, payload: item })
        }
    }
}

export const removeTask = (fields, index, item) => (dispatch, state) => {
    fields.remove(index);
    if (item) {
        //dispatch({ type: ADD_AUTOCOMPLETE_TASK, payload: item })
    }
}

export const addPiece = (fields, id) => (dispatch, state) => {
    if (id != -1) {
        const item = state().element.create.pieces.find(x => x.id == id);
        fields.push(item);
        if (item) {
            dispatch(change('element/create', 'piece_selectables', '-1'))
            //dispatch({ type: REMOVE_AUTOCOMPLETE_TASK, payload: item })
        }
    }
}

export const removePiece  = (fields, index, item) => (dispatch, state) => {
    fields.remove(index);
    if (item) {
        //dispatch({ type: ADD_AUTOCOMPLETE_TASK, payload: item })
    }
}

export const create = (element) => (dispatch) => {
    dispatch({ type: REQUEST_CREATE_ELEMENT })

    api.post("element", element)
        .then((response) => {
            dispatch({ type: RESPONSE_CREATE_ELEMENTS, payload: response.data })
            dispatch(replace('/element'));
            toast.success("Pedido creado")
        })
        .catch((error) => {
            dispatch({ type: ERROR_CREATE_ELEMENTS, error: error })
            toast.error("Error al crear pedido")
        })
}

export const load = () => dispatch => {
    // dispatch({ type: LOAD_ELEMENT })
    // const url = "element"
    // api.get(url)
    //     .then((response) => {
    //         dispatch({ type: LOADED_ELEMENT, payload: response.data })
    //     })
    //     .catch((error) => {
    //         dispatch({ type: ERROR_ELEMENTS, error: "error" })
    //     })
    dispatch({ type: LOADED_ELEMENT })
}

export const goBack = () => dispatch => {
    dispatch(replace('/element'));
    toast.info("Creación cancelada")
}