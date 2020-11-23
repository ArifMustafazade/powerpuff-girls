// interfaces
import { IApiHandlerResponse } from './models';

// constants
import { errorTypes, errorMessage } from './constants';

/** @helpers */

// in case of server error
export const returnServerError = (): IApiHandlerResponse<never> => {
    return {
        status: false,
        errorType: errorTypes.serverError,
        errorMessage,
    };
};

// redux state update helper
export const updateState = <S, P>(oldObject: S, updatedProperties: P): S => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};
