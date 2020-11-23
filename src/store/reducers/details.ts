// action types
import * as actionTypes from '../actions/actionTypes';

// interfaces
import { IDetailsState, IActionType, IProperty } from '../models';
import { IShowDetails } from '../../common/models';

// helpers
import { updateState } from '../../common/helpers';

/** @reducer */
const initialState: IDetailsState = {
    details: null,
    loading: false,
    error: false,
    errorType: '',
    errorMessage: '',
};

const reducer = (state = initialState, action: IActionType): IDetailsState => {
    switch (action.type) {
        case actionTypes.GET_SHOW_DETAILS_START:
            return updateState<IDetailsState, IProperty<IShowDetails>>(state, { loading: true });
        case actionTypes.GET_SHOW_DETAILS_SUCCESS:
            return updateState<IDetailsState, IProperty<IShowDetails>>(state, {
                loading: false,
                details: action.details,
            });
        case actionTypes.GET_SHOW_DETAILS_FAIL:
            return updateState<IDetailsState, IProperty<IShowDetails>>(state, {
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
