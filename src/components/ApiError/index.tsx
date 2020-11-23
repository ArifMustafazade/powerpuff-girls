import React from 'react';

// interfaces
import { IApiErrorProps } from './models';

export const ApiError = (props: IApiErrorProps): JSX.Element => {
    const { errorMessage } = props;
    return (
        <div className="error">
            <p className="error__message">{errorMessage}</p>
        </div>
    );
};
