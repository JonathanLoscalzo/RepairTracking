import { push } from 'react-router-redux'
import api from '../../common/api'
import * as _ from 'lodash';

import { RESPONSE_CREATE_TASKS } from '../create'
import { RESPONSE_UPDATE_TASKS } from '../update'
import { RESPONSE_REMOVE_TASK, REQUEST_REMOVE_TASK } from '../remove'

export const REQUEST_TASKS = 'TASKS/LIST/REQUEST_TASKS'
export const RESPONSE_TASKS = 'TASKS/LIST/RESPONSE_TASKS'
export const ERROR_TASKS = 'TASKS/LIST/ERROR_TASKS'

let initialState = {
    tasks: [],
    loading: true,
    error: null
}

export default function reducer(state = initialState, action = {}) {
    let diff;

    switch (action.type) {

        case RESPONSE_CREATE_TASKS:
            return { ...state, tasks: [...state.tasks, action.payload] }
        case RESPONSE_UPDATE_TASKS:
            diff = _.differenceWith(state.tasks, [action.payload], (a, b) => a.id === b.id);
            return { ...state, tasks: [...diff, action.payload] }

        case RESPONSE_REMOVE_TASK:
            diff = _.differenceWith(state.tasks, [action.payload], (a, b) => a.id === b.id);
            return { ...state, tasks: [...diff], loading: false }
        case REQUEST_REMOVE_TASK:
            return { ...state, loading: true }

        case REQUEST_TASKS:
            return { ...state, loading: true }
        case RESPONSE_TASKS:
            return { ...state, loading: false, tasks: action.payload };
        case ERROR_TASKS:
            return { ...state, loading: false, tasks: [], error: action.error }

        default:
            return state;
    }
}

export const load = () => (dispatch) => {
    dispatch({ type: REQUEST_TASKS })
    const url = "task"
    api.get(url)
        .then((response) => {
            dispatch({ type: RESPONSE_TASKS, payload: response.data })
        })
        .catch((error) => {
            dispatch({ type: ERROR_TASKS, error: "error" })
        })
}

export const goToCreate = () => (dispatch) => {
    dispatch(push('/task/new'))
}

export const goToEdit = (id) => (dispatch, state) => {
    dispatch(push(`/task/update/${id}`))
}