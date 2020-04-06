import {
    GET_RECORDS_REQUEST,
    RECORDS_RESPONSE,
    RESPONSE_FAIL
} from '../actions/MainActions'

export const DataReducer = (
    state = {
        isLoading: false,
        homeloanList: []
    }, action
) => {
    switch (action.type) {
        case RECORDS_RESPONSE:
            return {
                ...state,
                homeloanList: action.homeloanList,
                isLoading: false,
            }
        case GET_RECORDS_REQUEST:
            return {
                ...state,
                isLoading: false,
            }

        case RESPONSE_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}



