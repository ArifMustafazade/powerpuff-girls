/** @constants */

const uriPrefix = 'http://api.tvmaze.com';

export const showId = 6771;

export const apiUrls = {
    getShowDetailsById: `${uriPrefix}/shows/${showId}`,
    getEpisodesListById: `${uriPrefix}/shows/${showId}/episodes`,
    getEpisodeById: `${uriPrefix}/episodes`,
};

export const errorTypes = {
    serverError: 'serverError',
};
