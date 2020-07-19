import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ListOfPodcasts = (props) => {
    
    const {podcasts, loading} = props;

    return (<ul>
        <h5>Podcasts</h5>
        {loading && 
            <h6>Cargando ...</h6>
        }
        {podcasts && podcasts.map((podcast) => (
            <Wrapper data-testid="PodcastTile" key={podcast.id}>
                <li>{podcast.title}</li>
            </Wrapper>
        ))}
        
    </ul>);
}

ListOfPodcasts.propTypes = {
    podcasts: PropTypes.array.isRequired,
}

export {ListOfPodcasts}