// helpers
import { updateState, returnServerError } from '../helpers';

// interfaces
import { IApiHandlerResponse } from '../models';

/** @tests */

describe('updateState helper', () => {
    interface IState {
        title: string;
        summary: string;
        id: number;
    }

    interface IUpdatedProperties {
        title: string;
    }

    const oldState: IState = {
        title: 'TEST_1',
        summary: 'TEST_1',
        id: 1,
    };

    test('should update 1 property', () => {
        const newProperties = {
            title: 'TEST_2',
        };
        const newState: IState = {
            title: 'TEST_2',
            summary: 'TEST_1',
            id: 1,
        };
        expect(updateState<IState, IUpdatedProperties>(oldState, newProperties)).toEqual<IState>(newState);
    });

    test('should update all properties', () => {
        const newProperties = {
            title: 'TEST_2',
            summary: 'TEST_2',
            id: 2,
        };

        const newState: IState = {
            title: 'TEST_2',
            summary: 'TEST_2',
            id: 2,
        };
        expect(updateState<IState, IUpdatedProperties>(oldState, newProperties)).toEqual<IState>(newState);
    });
});

describe('returnServerError helper', () => {
    const errorMessage = 'Data is currently unavailable';
    test('should return error with correct message', () => {
        const errorResponse: IApiHandlerResponse<never> = {
            status: false,
            errorType: 'serverError',
            errorMessage,
        };
        expect(returnServerError()).toEqual<IApiHandlerResponse<never>>(errorResponse);
    });
});
