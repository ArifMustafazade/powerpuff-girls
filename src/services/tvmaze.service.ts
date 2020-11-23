import axios from 'axios';

// constants
import { apiUrls } from '../common/constants';

// helpers
import { returnServerError } from '../common/helpers';

// interfaces
import { IGetShowDetailsResponse, IGetEpisodesListResponse } from './models';
import { IApiHandlerResponse } from '../common/models';

/** @handlers */

export const handleGetShowDetails = (data: IGetShowDetailsResponse): IApiHandlerResponse<IGetShowDetailsResponse> => {
    return {
        status: true,
        data,
    };
};

export const handleGetEpisodesList = (
    data: IGetEpisodesListResponse,
): IApiHandlerResponse<IGetEpisodesListResponse> => {
    return {
        status: true,
        data,
    };
};

/** @services */

export const getShowDetails = async (): Promise<IApiHandlerResponse<IGetShowDetailsResponse>> => {
    return axios
        .get<IGetShowDetailsResponse>(apiUrls.getShowDetailsById)
        .then(({ data }) => handleGetShowDetails(data))
        .catch((error) => returnServerError(error));
};

export const getEpisodesList = async (): Promise<IApiHandlerResponse<IGetEpisodesListResponse>> => {
    return axios
        .get<IGetEpisodesListResponse>(apiUrls.getEpisodesListById)
        .then(({ data }) => handleGetEpisodesList(data))
        .catch((error) => returnServerError(error));
};
