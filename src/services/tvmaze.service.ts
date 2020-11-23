import axios from 'axios';

// constants
import { apiUrls } from '../common/constants';

// helpers
import { returnServerError } from '../common/helpers';

// interfaces
import { IGetShowDetailsResponse, IGetEpisodesListResponse, IGetEpisodeByIdResponse } from './models';
import { IApiHandlerResponse } from '../common/models';

/** @handlers */
export const handleApiResponse = <T>(data: T): IApiHandlerResponse<T> => {
    return {
        status: true,
        data,
    };
};

/** @services */
export const getShowDetails = async (): Promise<IApiHandlerResponse<IGetShowDetailsResponse>> => {
    return axios
        .get<IGetShowDetailsResponse>(apiUrls.getShowDetailsById)
        .then(({ data }) => handleApiResponse<IGetShowDetailsResponse>(data))
        .catch(() => returnServerError());
};

export const getEpisodesList = async (): Promise<IApiHandlerResponse<IGetEpisodesListResponse>> => {
    return axios
        .get<IGetEpisodesListResponse>(apiUrls.getEpisodesListById)
        .then(({ data }) => handleApiResponse<IGetEpisodesListResponse>(data))
        .catch(() => returnServerError());
};

export const getEpisodeById = async (episodeId: number): Promise<IApiHandlerResponse<IGetEpisodeByIdResponse>> => {
    return axios
        .get<IGetEpisodeByIdResponse>(`${apiUrls.getEpisodeById}/${episodeId}`)
        .then(({ data }) => handleApiResponse<IGetEpisodeByIdResponse>(data))
        .catch(() => returnServerError());
};
