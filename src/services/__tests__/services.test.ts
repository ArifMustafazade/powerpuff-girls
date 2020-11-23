// interfaces
import { IApiHandlerResponse } from '../../common/models';
import { IGetEpisodesListResponse } from '../models';

// service handlers
import { handleApiResponse } from '../tvmaze.service';

/** @tests */

describe('apiResponses handler', () => {
    const mockEpisodes = [
        {
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
        },
    ];

    const mockApiResponse: IGetEpisodesListResponse = [...mockEpisodes];
    const mockHandlerResponse: IApiHandlerResponse<IGetEpisodesListResponse> = {
        status: true,
        data: [...mockEpisodes],
    };

    test('should return success', () => {
        expect(handleApiResponse<IGetEpisodesListResponse>(mockApiResponse)).toEqual<
            IApiHandlerResponse<IGetEpisodesListResponse>
        >(mockHandlerResponse);
    });
});
