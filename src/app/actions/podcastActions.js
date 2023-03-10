export const SAVE_PODCAST = "SAVE_PODCAST";
export const SAVE_EPISODE = "SAVE_EPISODE";

export const savePodcast = (podcast) => {
    return {
        type: SAVE_PODCAST,
        payload: podcast
    }
}

export const saveEpisode = (episode) => {
    return {
        type: SAVE_EPISODE,
        payload: episode
    }
}