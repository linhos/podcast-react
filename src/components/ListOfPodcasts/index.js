import React from 'react';

const ListOfPodcasts = (props) => {
    
    const {podcasts, loading} = props;

    return (<ul>
        <h5>Podcasts</h5>
        {loading && 
            <h6>Cargando ...</h6>
        }
        {podcasts && 
            podcasts.map((podcast) => <li key={podcast.body}>{podcast.body}</li>)
        }
        
    </ul>);

}

export {ListOfPodcasts}