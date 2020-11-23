import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

// constants
import { errorMessage } from '../../../common/constants';

// interface
import { IEpisode } from '../../../common/models';
import { IEpisodeSummaryProps } from '../models';

// components
import { EpisodeSummary, NoImage, Spinner, ApiError } from '../../';

/** tests */
describe('<EpisodeSummary />', () => {
    let wrapper: ShallowWrapper<IEpisodeSummaryProps>;

    const mockEpisode: IEpisode = {
        id: 1,
        url: 'http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot',
        name: 'Pilot',
        season: 1,
        number: 1,
        type: 'regular',
        airdate: '2013-06-24',
        airtime: '22:00',
        airstamp: '2013-06-25T02:00:00+00:00',
        runtime: 60,
        image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg',
        },
        summary:
            "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
        _links: {
            self: {
                href: 'http://api.tvmaze.com/episodes/1',
            },
        },
    };
    beforeEach(() => {
        wrapper = shallow(
            <EpisodeSummary episode={mockEpisode} loading={false} error={false} errorMessage={errorMessage} />,
        );
    });

    test('should render with cover image', () => {
        expect(wrapper.find(NoImage)).toHaveLength(0);
    });

    test('should render with image placeholder', () => {
        wrapper.setProps({
            episode: { ...mockEpisode, image: null },
        });

        expect(wrapper.find(NoImage)).toHaveLength(1);
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
