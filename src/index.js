import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import PodcastList from './views/PodcastList/PodcastList';
import PodcastDetail from './views/PodcastDetail/PodcastDetail';
import store from './app/store';
import './index.css';
import EpisodeDetail from "./views/EpisodeDetail/EpisodeDetail";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PodcastList />}>
          <Route index element={<PodcastList />} />
        </Route>
        <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><Main /></Provider>);