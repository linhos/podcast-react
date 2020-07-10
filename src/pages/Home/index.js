import React from 'react';
import {ListOfPodcasts} from '../../components/ListOfPodcasts';
import {usePodcasts} from '../../hooks/usePodcasts';

const Home = () => {
    const {podcasts, loading} = usePodcasts();

    return (
        <>
            <ListOfPodcasts podcasts={podcasts} loading={loading} />
        </>
    )
}

export {Home}