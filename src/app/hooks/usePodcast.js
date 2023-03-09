import useFetch from './useFetch';

export default function usePodcast() {
    const { data, loading, error } = useFetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
    return { data, error, loading }
}