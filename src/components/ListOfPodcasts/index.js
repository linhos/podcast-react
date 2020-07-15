import React from 'react';
import PropTypes from 'prop-types';

const ListOfPodcasts = (props) => {
    
    const {podcasts, loading} = props;

    return (<ul>
        <h5>Podcasts</h5>
        {loading && 
            <h6>Cargando ...</h6>
        }
        {podcasts && 
            podcasts.map((podcast) => <li key={podcast.name}>{podcast.name}</li>)
        }
        
    </ul>);
}

ListOfPodcasts.propTypes = {
    podcasts: PropTypes.array.isRequired,
}

export {ListOfPodcasts}