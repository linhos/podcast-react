import React from 'react';
import { render } from '@testing-library/react';
import { ListOfPodcasts } from '../index';

describe('test suite for List of podcasts component', () => {

    it('should render the title of the component', () => {
        const usePodcastsMock = {
            podcasts : [],
            loading : true
        }

        const {getByText} = render(
            <ListOfPodcasts 
                podcasts={usePodcastsMock.podcasts} 
                loading= {usePodcastsMock.loading}
            />
        );

        const titleElement = getByText(/Podcasts/i);
        expect(titleElement).toBeInTheDocument();
    })

    it('shuould show the cargando... text while loading prop is true', () => {
        const usePodcastsMock = {
            podcasts : [],
            loading : true
        }

        const {container} = render(
            <ListOfPodcasts 
                podcasts={usePodcastsMock.podcasts} 
                loading= {usePodcastsMock.loading}
            />
        );

        
        expect(container.innerHTML)
        .toMatch('<h6>Cargando ...</h6>')
    })

    it('should display the list of podasts when podcasts prop is not empty', async () => {
        const usePodcastsMock = {
            podcasts : [{id: 1, body: 'titulo1'}, {id:2, body: 'titulo2'}],
            loading : false
        }

        const {findAllByTestId} = render(
            <ListOfPodcasts 
                podcasts={usePodcastsMock.podcasts} 
                loading= {usePodcastsMock.loading}
            />
        );

        expect(await findAllByTestId("PodcastTile")).toHaveLength(2);
        
        

    })
})