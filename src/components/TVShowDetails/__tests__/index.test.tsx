import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

// constants
import { errorMessage } from '../../../common/constants';

// interface
import { IShowDetails } from '../../../common/models';
import { ITVShowDetailsProps } from '../models';

// components
import { TVShowDetails, Spinner, ApiError } from '../../';

/** tests */
describe('<TVShowDetails />', () => {
    let wrapper: ShallowWrapper<ITVShowDetailsProps>;

    const mockDetails: IShowDetails = {
        id: 6771,
        url: 'http://www.tvmaze.com/shows/6771/the-powerpuff-girls',
        name: 'The Powerpuff Girls',
        type: 'Animation',
        language: 'English',
        genres: ['Comedy', 'Action', 'Science-Fiction'],
        status: 'Running',
        runtime: 15,
        premiered: '2016-04-04',
        officialSite: 'https://www.cartoonnetwork.com/video/powerpuff-girls/index.html',
        schedule: {
            time: '17:30',
            days: ['Sunday'],
        },
        rating: {
            average: 6.2,
        },
        weight: 43,
        network: {
            id: 11,
            name: 'Cartoon Network',
            country: {
                name: 'United States',
                code: 'US',
                timezone: 'America/New_York',
            },
        },
        webChannel: null,
        externals: {
            tvrage: null,
            thetvdb: 307473,
            imdb: 'tt4718304',
        },
        image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg',
        },
        summary:
            "<p>The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"</p>",
        updated: 1573685920,
        _links: {
            self: {
                href: 'http://api.tvmaze.com/shows/6771',
            },
            previousepisode: {
                href: 'http://api.tvmaze.com/episodes/1662010',
            },
        },
    };

    beforeEach(() => {
        wrapper = shallow(
            <TVShowDetails details={mockDetails} loading={false} error={false} errorMessage={errorMessage} />,
        );
    });

    test('should render with alt text on the cover image', () => {
        expect(wrapper.find('.details__cover-image').props().alt).toBe('TV show cover image');
    });

    test('should render with Spinner', () => {
        wrapper.setProps({
            loading: true,
        });

        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    test('should render with ApiError', () => {
        wrapper.setProps({
            error: true,
        });

        expect(wrapper.find(ApiError)).toHaveLength(1);
    });
});