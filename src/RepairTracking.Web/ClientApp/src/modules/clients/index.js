/*Un módulo…

DEBE exportar por defecto una función llamada reducer().
DEBE exportar sus creadores de acciones como funciones.
DEBE definir sus tipos de acciones en el formato modulo-app/reducer/ACTION_TYPE.
PUEDE exportar sus tipos de acciones como UPPER_SNAKE_CASE si otro reducer la va a usar o si esta publicada como una librería reusable.*/
import { push, replace } from 'react-router-redux';
import api from '../common/api';
import { toast } from 'react-toastify';

// Actions
const LOAD = 'clients/LOAD';
const LOAD_REQUEST = 'clients/LOAD_REQUEST';
const LOAD_RESPONSE = 'clients/LOAD_RESPONSE';
const LOAD_ERROR = 'clients/LOAD_ERROR';

const CREATE = 'clients/CREATE';
const CREATE_REQUEST = 'clients/CREATE_REQUEST';
const CREATE_RESPONSE = 'clients/CREATE_RESPONSE';
const CREATE_ERROR = 'clients/CREATE_ERROR';

const UPDATE = 'clients/UPDATE';
const UPDATE_REQUEST = 'clients/UPDATE_REQUEST';
const UPDATE_RESPONSE = 'clients/UPDATE_RESPONSE';
const UPDATE_ERROR = 'clients/UPDATE_ERROR';
const UPDATE_CANCEL = 'clients/UPDATE_CANCEL';

const REMOVE = 'clientas/REMOVE';
const REMOVE_REQUEST = 'clients/REMOVE_REQUEST';
const REMOVE_RESPONSE = 'clients/REMOVE_RESPONSE';
const REMOVE_ERROR = 'clients/REMOVE_ERROR';

const RETRIEVE_REQUEST = 'clients/RETRIEVE_REQUEST';
const RETRIEVE_RESPONSE = 'clients/RETRIEVE_RESPONSE';
const RETRIEVE_ERROR = 'clients/RETRIEVE_ERROR';

// Reducer
const initialState = {
  selectedClient: null,
  clients: [],
  loading: true
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case REMOVE_REQUEST:
    case REMOVE_RESPONSE:
    case REMOVE_ERROR:
      break;
    case UPDATE_REQUEST:
      return { ...state, loading: true };
    case UPDATE_RESPONSE:
      // todo: BUSCAR EL CLIENTE, Y MODIFICARLO.
      return { ...state, loading: false, clients: state.clients, selectedClient: null };
    case UPDATE_ERROR:
      return { ...state, loading: false };
    case UPDATE_ERROR:
      return { ...state, loading: false, selectedClient: null };

    case LOAD_REQUEST:
      return { ...state, loading: true };
    case LOAD_RESPONSE:
      return { ...state, loading: false, clients: action.payload };
    case LOAD_ERROR:
      return { ...state, loading: false, clients: [] };

    case RETRIEVE_REQUEST:
      return { ...state, loading: true };
    case RETRIEVE_RESPONSE:
      return { ...state, loading: false, selectedClient: action.payload };
    case RETRIEVE_ERROR:
      return { ...state, loading: false, selectedClient: null };
      break;
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export const load = () => dispatch => {
  dispatch({ type: LOAD_REQUEST })

  const url = `client`;

  api.get(url)
    .then((response) => {
      dispatch({ type: LOAD_RESPONSE, payload: response.data })
    })
    .catch(() => dispatch({ type: LOAD_ERROR, error: "Ocurrió un error" }));
}

export const goToEdit = id => dispatch => {
  dispatch({ type: RETRIEVE_REQUEST })

  const url = `client/${id}`;

  api.get(url)
    .then((response) => {
      dispatch({ type: RETRIEVE_RESPONSE, payload: response.data });
      dispatch(push(`/client/edit/${id}`));
    })
    .catch(() => {
      toast.error("Ocurrió un error");
      dispatch({ type: RETRIEVE_ERROR, error: "Ocurrió un error" })
    });
}

export const goToCreate = () => dispatch => {
  dispatch(push("/client/new"))
}

export const goToClients = () => dispatch => {
  dispatch({ type: UPDATE_CANCEL })
  toast.info("Edición Cancelada");
  dispatch(replace("/client"))
}

export const create = client => dispatch => {
  dispatch({ type: CREATE_REQUEST })
  toast.success("Se creó correctamente");
  dispatch(replace("/client"));
  dispatch({ type: CREATE_RESPONSE, payload: { client } })
}

export const update = client => dispatch => {
  dispatch({ type: UPDATE_REQUEST })
  toast.success("Se actualizó correctamente");
  dispatch(replace("/client"));
  dispatch({ type: UPDATE_RESPONSE, payload: { client } })
}

export const remove = id => dispatch => {
  dispatch({ type: REMOVE_REQUEST })

  // call api
  //return api
  dispatch({ type: REMOVE_RESPONSE, payload: { id } })
}