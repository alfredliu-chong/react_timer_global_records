import { createReducer } from "../utils"
import { FETCH_DATA } from "./action"

const initialState = {
    data: [],
    isLoading: false,
    error: null
}

const handleRequest = state => ({
    ...state,
    isLoading: true,
    error: null
})

const handleError = (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
})

const handleSuccess = (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    data: action.payload
})

const handlers = {
    [FETCH_DATA.REQUEST]: handleRequest,
    [FETCH_DATA.SUCCESS]: handleSuccess,
    [FETCH_DATA.FAILURE]: handleError,
}

export default createReducer(initialState, handlers)