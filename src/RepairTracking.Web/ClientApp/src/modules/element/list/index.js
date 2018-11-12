import { push } from 'react-router-redux'
import api from '../../common/api'
import * as _ from 'lodash';

import { RESPONSE_CREATE_ELEMENTS } from '../create'
import { RESPONSE_UPDATE_ELEMENTS } from '../update'
import { RESPONSE_REMOVE_ELEMENT } from '../remove'

export const REQUEST_ELEMENTS = 'ELEMENTS/LIST/REQUEST_ELEMENTS'
export const RESPONSE_ELEMENTS = 'ELEMENTS/LIST/RESPONSE_ELEMENTS'
export const ERROR_ELEMENTS = 'ELEMENTS/LIST/ERROR_ELEMENTS'

let initialState = {
    elements: [],
    loading: true,
    error: null
}

export default function reducer(state = initialState, action = {}) {
    let diff;

    switch (action.type) {

        case RESPONSE_CREATE_ELEMENTS:
            return { ...state, elements: [...state.elements, action.payload] }
        case RESPONSE_UPDATE_ELEMENTS:
            diff = _.differenceWith(state.orders, [action.payload], (a, b) => a.id === b.id);
            return { ...state, orders: [...diff, action.payload] }
        case RESPONSE_REMOVE_ELEMENT:
            diff = _.differenceWith(state.orders, [action.payload], (a, b) => a.id === b.id);
            return { ...state, orders: [...diff] }

        case REQUEST_ELEMENTS:
            return { ...state, loading: true }
        case RESPONSE_ELEMENTS:
            return { ...state, loading: false, elements: action.payload };
        case ERROR_ELEMENTS:
            return { ...state, loading: false, elements: [], error: action.error }

        default:
            return state;
    }
}

export const load = () => (dispatch) => {
    dispatch({ type: REQUEST_ELEMENTS })
    const url = "element"
    api.get(url)
        .then((response) => {
            dispatch({ type: RESPONSE_ELEMENTS, payload: response.data })
        })
        .catch((error) => {
            dispatch({ type: ERROR_ELEMENTS, error: "error" })
        })
}

export const goToCreate = () => (dispatch) => {
    dispatch(push('/element/new'))
}

export const goToEdit = (id) => (dispatch, state) => {
    dispatch(push(`/element/update/${id}`))
}