// action types
import * as actionTypes from '../actions/actionTypes';

// interfaces
import { IEpisodesState, IActionType, IProperty } from '../models';
import { IEpisode } from '../../common/models';

// helpers
import { updateState } from '../../common/helpers';

/** @reducer */
const initialState: IEpisodesState = {
    episodes: null,
    loading: false,
    error: false,
    errorType: '',
    errorMessage: '',
};

const reducer = (state = initialState, action: IActionType): IEpisodesState => {
    switch (action.type) {
        case actionTypes.GET_EPISODES_LIST_START:
            return updateState<IEpisodesState, IProperty<IEpisode[]>>(state, { loading: true });
        case actionTypes.GET_EPISODES_LIST_SUCCESS:
            return updateState<IEpisodesState, IProperty<IEpisode[]>>(state, {
                loading: false,
                episodes: action.episodes,
            });
        case actionTypes.GET_EPISODES_LIST_FAIL:
            return updateState<IEpisodesState, IProperty<IEpisode[]>>(state, {
                loading: false,
                error: true,
                errorMessage: action.errorMessage,
                errorType: action.errorType,
            });
        default:
            return state;
    }
};

export default reducer;
