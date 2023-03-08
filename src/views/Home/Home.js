import React, { useState, useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux'
import NavBar from '../../components/NavBar/NavBar';
import PodcastList from '../PodcastList/PodcastList';

const Home = () => {
    const [count, setCount] = useState(0);

    const { store } = useContext(ReactReduxContext);

    console.log(store.getState().counterReducer.count)

    useEffect(() => {

    });

    return <div>
        <NavBar />
        <PodcastList />
    </div>;
};

export default Home;