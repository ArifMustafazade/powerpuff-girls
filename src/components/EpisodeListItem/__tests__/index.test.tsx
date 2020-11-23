import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

// interface
import { IEpisode } from '../../../common/models';
import { IEpisodeListItemProps } from '../models';

// components
import { EpisodeListItem } from '../';

/** tests */
describe('<EpisodeListItem />', () => {
    let wrapper: ShallowWrapper<IEpisodeListItemProps>;

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
        wrapper = shallow(<EpisodeListItem episode={mockEpisode} />);
    });

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render with correct season', () => {
        wrapper.setProps({
            episode: { ...mockEpisode, season: 3 },
        });

        expect(wrapper.find('.episodes__episode-season').text()).toBe('Season: 3');
    });

    test('should render with correct number', () => {
        wrapper.setProps({
            episode: { ...mockEpisode, number: 7 },
        });

        expect(wrapper.find('.episodes__episode-number').text()).toBe('Number: 7');
    });
});
