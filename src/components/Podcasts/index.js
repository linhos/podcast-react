import React from 'react';
import {usePodcasts} from '../../hooks/usePodcasts'

const Podcasts = () => {
    const {podcasts, loading} = usePodcasts();

    return <ul>
        {loading && 
            <h6>Cargando ...</h6>
        }
        {podcasts && 
            podcasts.map((podcast) => <li key={podcast.body}>{podcast.body}</li>)
        }
        
    </ul>

}

export {Podcasts}