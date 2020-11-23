// action types
import * as actionTypes from '../actions/actionTypes';

// interfaces
import { IEpisodesState, IActionType } from '../models';

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
            return updateState(state, { loading: true });
        case actionTypes.GET_EPISODES_LIST_SUCCESS:
            return updateState(state, { loading: false, episodes: action.episodes });
        case actionTypes.GET_EPISODES_LIST_FAIL:
            return updateState(state, { loading: false, error: true });
        default:
            return state;
    }
};

export default reducer;
