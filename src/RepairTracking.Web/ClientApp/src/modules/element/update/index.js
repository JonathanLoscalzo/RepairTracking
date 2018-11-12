import { replace } from 'react-router-redux'
import { toast } from 'react-toastify';
import { change } from 'redux-form';

import * as _ from 'lodash'
import api from '../../common/api';

export const LOAD_ELEMENT = "ELEMENTS/UPDATE/LOAD_CREATE_ELEMENT"
export const LOADED_ELEMENT = "ELEMENTS/UPDATE/LOADED_CREATE_ELEMENT"

export const REQUEST_UPDATE_ELEMENT = "ELEMENTS/UPDATE/REQUEST_ELEMENTS"
export const RESPONSE_UPDATE_ELEMENTS = "ELEMENTS/UPDATE/RESPONSE_ELEMENTS"
export const ERROR_UPDATE_ELEMENTS = "ELEMENTS/UPDATE/ERROR_ELEMENTS"

const ADD_AUTOCOMPLETE_TASK = "ELEMENTS/UPDATE/ADD_TASK"
const REMOVE_AUTOCOMPLETE_TASK = "ELEMENTS/UPDATE/REMOVE_TASK"

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
            debugger;
            return { ...state, loading: false, element: action.payload }

        case ADD_AUTOCOMPLETE_TASK:
            let tasks = state.tasks
            return { ...state, tasks: [...tasks, action.payload] }

        case REMOVE_AUTOCOMPLETE_TASK:
            diff = _.differenceWith(state.tasks, [action.payload], (a, b) => a.id === b.id);
            return { ...state, tasks: diff }

        case REQUEST_UPDATE_ELEMENT:
            return { ...state, loading: true }
        case RESPONSE_UPDATE_ELEMENTS:
            return { ...state, loading: false }
        case ERROR_UPDATE_ELEMENTS:
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
}

export const addTask = (fields, id) => (dispatch, state) => {
    if (id != -1) {
        const item = state().element.update.tasks.find(x => x.id == id);
        fields.push(item);
        if (item) {
            dispatch(change('element/update', 'task_selectables', '-1'))
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
        const item = state().element.update.pieces.find(x => x.id == id);
        fields.push(item);
        if (item) {
            dispatch(change('element/update', 'piece_selectables', '-1'))
            //dispatch({ type: REMOVE_AUTOCOMPLETE_TASK, payload: item })
        }
    }
}

export const removePiece = (fields, index, item) => (dispatch, state) => {
    fields.remove(index);
    if (item) {
        //dispatch({ type: ADD_AUTOCOMPLETE_TASK, payload: item })
    }
}

export const update = (element) => (dispatch) => {
    dispatch({ type: REQUEST_UPDATE_ELEMENT })

    api.put(`element/${element.id}`, element)
        .then((response) => {
            dispatch({ type: RESPONSE_UPDATE_ELEMENTS, payload: response.data })
            dispatch(replace('/element'));
            toast.success("Pedido Modificado")
        })
        .catch((error) => {
            dispatch({ type: ERROR_UPDATE_ELEMENTS, error: error })
            toast.error("Error al modificar pedido")
        })
}

export const load = (id) => (dispatch, state) => {

    dispatch({ type: LOAD_ELEMENT })
    let order = state().element.list.elements.find(x => x.id === id);

    if (order) {
        dispatch({ type: LOADED_ELEMENT, payload: order })
    } else {
        dispatch(replace('/element'));
        toast.warn("No se puede editar el pedido seleccionado")
    }
}

export const goBack = () => dispatch => {
    dispatch(replace('/element'));
    toast.info("Creación cancelada")
}