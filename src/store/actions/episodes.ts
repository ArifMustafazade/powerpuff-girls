import { ThunkAction } from 'redux-thunk';

// types
import * as actionTypes from './actionTypes';

// interfaces
import { IActionType, IStore } from '../models';
import { IApiHandlerResponse } from '../../common/models';
import { IGetEpisodesListResponse } from '../../services/models';

// services
import { getEpisodesList } from '../../services/tvmaze.service';

/** @actions */
export const getEpisodesListInit = (): ThunkAction<Promise<void>, IStore, unknown, IActionType> => {
    return async (dispatch) => {
        dispatch(getEpisodesListStart());
        const episodesResponse: IApiHandlerResponse<IGetEpisodesListResponse> = await getEpisodesList();
        if (episodesResponse.status) {
            dispatch(getEpisodesListSuccess(episodesResponse.data));
        } else {
            dispatch(getEpisodesListFail(episodesResponse.errorMessage, episodesResponse.errorType));
        }
    };
};

export const getEpisodesListSuccess = (episodes: IGetEpisodesListResponse): IActionType => {
    return {
        type: actionTypes.GET_EPISODES_LIST_SUCCESS,
        episodes,
    };
};

export const getEpisodesListFail = (errorMessage: string, errorType: string): IActionType => {
    return {
        type: actionTypes.GET_EPISODES_LIST_FAIL,
        error: true,
        errorMessage,
        errorType,
    };
};

export const getEpisodesListStart = (): IActionType => {
    return {
        type: actionTypes.GET_EPISODES_LIST_START,
    };
};
