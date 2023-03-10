import { SAVE_PODCAST, SAVE_EPISODE } from "../actions/podcastActions"

const initialState = {
    podcast: {},
    episode: {}
}

export const podcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PODCAST:
            return {
                ...state,
                podcast: { ...action.payload }
            }
        case SAVE_EPISODE:
            return {
                ...state,
                episode: { ...action.payload }
            }
        default:
            return state;
    }
}