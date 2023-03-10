import useFetch from './useFetch';

export default function usePDetails(podcastId) {
    const { data, loading, error } = useFetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}`)}`, `usePDetails-${podcastId}`);
    return { data, error, loading }
}