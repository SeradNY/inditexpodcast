import { INCREASE_COUNTER } from "../actions/counterActions"

const initialState = {
    count: 1
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state;
    }
}