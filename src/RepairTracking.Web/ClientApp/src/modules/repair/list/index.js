import { push } from 'react-router-redux'
import api from '../../common/api'
import * as _ from 'lodash';
import { toast } from 'react-toastify';

/*import { RESPONSE_CREATE_ELEMENTS } from '../create'
import { RESPONSE_UPDATE_ELEMENTS } from '../update'
import { RESPONSE_REMOVE_ELEMENT, REQUEST_REMOVE_ELEMENT } from '../remove'*/

export const REQUEST_REPAIRS = 'REPAIRS/LIST/REQUEST_REPAIRS'
export const RESPONSE_REPAIRS = 'REPAIRS/LIST/RESPONSE_REPAIRS'
export const ERROR_REPAIRS = 'REPAIRS/LIST/ERROR_REPAIRS'

export const REQUEST_USER_REPAIRS = 'REPAIRS/LIST/REQUEST_USER_REPAIRS';
export const RESPONSE_USER_REPAIRS = 'REPAIRS/LIST/REQUEST_USER_REPAIRS';

let initialState = {
    repairs: [],
    loading: true,
    error: null
}

export default function reducer(state = initialState, action = {}) {
    let diff;

    switch (action.type) {

        /*case RESPONSE_CREATE_ELEMENTS:
            return { ...state, elements: [...state.elements, action.payload] }
        case RESPONSE_UPDATE_ELEMENTS:
            diff = _.differenceWith(state.elements, [action.payload], (a, b) => a.id === b.id);
            return { ...state, elements: [...diff, action.payload] }

        case RESPONSE_REMOVE_ELEMENT:
            diff = _.differenceWith(state.elements, [action.payload], (a, b) => a.id === b.id);
            return { ...state, elements: [...diff], loading: false }
        case REQUEST_REMOVE_ELEMENT:
            return { ...state, loading: true }*/
        case REQUEST_REPAIRS:
            return { ...state, loading: true }
        case RESPONSE_REPAIRS:
            return { ...state, loading: false, repairs: action.payload };
        case ERROR_REPAIRS:
            return { ...state, loading: false, repairs: [], error: action.error }

        default:
            return state;
    }
}

export const loadRepairs = () => (dispatch) => {
    dispatch({ type: REQUEST_REPAIRS })
    const url = "repair"
    api.get(url)
        .then((response) => {
            dispatch({ type: RESPONSE_REPAIRS, payload: response.data })
        })
        .catch((error) => {
            toast.error('error en reparaciones');
            dispatch({ type: ERROR_REPAIRS, error: "error" })
        })
    // let payload = [{
    //     code: "MM1",
    //     status: "En Proceso",
    //     element: "computadora",
    //     observations: "Falta bastante trabajo",
    //     pieces: [],
    //     tasks: [],
    //     generic: [],
    //     client: {/*datos del cliente*/}
    // },
    // {
    //     code: "AA2",
    //     status: "En Proceso",
    //     element: "motosierra",
    //     observations: "Falta bastante trabajo",
    //     pieces: [],
    //     tasks: []
    // }];
    //dispatch({ type: RESPONSE_REPAIRS, payload: payload})
}

export const load = (code) => dispatch => {
    const url = "repair/code/" + code;
    api.get(url)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            toast.error('error en reparaciones');
            dispatch({ type: ERROR_REPAIRS, error: "error" })
        })
} 

export const repairsForUserFunc = (id) => dispatch =>{
    dispatch({type: REQUEST_REPAIRS})

    const url = "client/GetRepairs/" + id;
    api.get(url)
        .then((response) => {
            dispatch({type: RESPONSE_REPAIRS, payload: response.data});
        })
        .catch((error) => {
            toast.error('error en reparaciones');
            dispatch({ type: ERROR_REPAIRS, error: "error" })
        })
};

export const goToCreate = () => (dispatch) => {
    dispatch(push('/element/new'))
}

export const goToEdit = (id) => (dispatch, state) => {
    dispatch(push(`/element/update/${id}`))
}