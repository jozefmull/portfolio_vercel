import { AppState } from "./interface";

type AppAction = 
    | {type: 'GET_PROJECT_LIST_REQUEST'}
    | {type: 'GET_PROJECT_LIST_SUCCESS', payload: any[]}
    | {type: 'GET_PROJECT_LIST_FAIL', payload: unknown}
    | {type: 'GET_PROJECT_DETAILS_REQUEST'}
    | {type: 'GET_PROJECT_DETAILS_SUCCESS', payload: any}
    | {type: 'GET_PROJECT_DETAILS_FAIL', payload: unknown}

// Reducer is how we specify application state changes in response to certain actions to our context
export const AppReducer = (state:AppState, action:AppAction):AppState => {
    switch (action.type) {
        case 'GET_PROJECT_LIST_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_PROJECT_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                projects: action.payload
            }
        case 'GET_PROJECT_LIST_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'GET_PROJECT_DETAILS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_PROJECT_DETAILS_SUCCESS':
            return {
                ...state,
                loading: false,
                projectDetails: action.payload
            }
        case 'GET_PROJECT_DETAILS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}