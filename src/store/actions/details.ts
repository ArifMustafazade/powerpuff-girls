import { ThunkAction } from 'redux-thunk';

// types
import * as actionTypes from './actionTypes';

// interfaces
import { IActionType, IStore } from '../models';
import { IApiHandlerResponse } from '../../common/models';
import { IGetShowDetailsResponse } from '../../services/models';

// services
import { getShowDetails } from '../../services/tvmaze.service';

/** @actions */
export const getShowDetailsInit = (): ThunkAction<Promise<void>, IStore, unknown, IActionType> => {
    return async (dispatch) => {
        dispatch(getShowDetailsStart());
        const detailsResponse: IApiHandlerResponse<IGetShowDetailsResponse> = await getShowDetails();
        if (detailsResponse.status) {
            dispatch(getShowDetailsSuccess(detailsResponse.data));
        } else {
            dispatch(getShowDetailsFail(detailsResponse.errorMessage, detailsResponse.errorType));
        }
    };
};

export const getShowDetailsSuccess = (details: IGetShowDetailsResponse): IActionType => {
    return {
        type: actionTypes.GET_SHOW_DETAILS_SUCCESS,
        details,
    };
};

export const getShowDetailsFail = (errorMessage: string, errorType: string): IActionType => {
    return {
        type: actionTypes.GET_SHOW_DETAILS_FAIL,
        error: true,
        errorMessage,
        errorType,
    };
};

export const getShowDetailsStart = (): IActionType => {
    return {
        type: actionTypes.GET_SHOW_DETAILS_START,
    };
};
