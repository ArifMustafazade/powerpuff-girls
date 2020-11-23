import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

// interfaces
import { IApiErrorProps } from '../models';

// components
import { ApiError } from '../';

/** tests */
describe('<ApiError />', () => {
    let wrapper: ShallowWrapper<IApiErrorProps>;

    const errorMessage = 'TEST_ERROR';

    beforeEach(() => {
        wrapper = shallow(<ApiError errorMessage={errorMessage} />);
    });

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render with correct error message', () => {
        expect(wrapper.find('.error__message').text()).toBe(errorMessage);
    });
});
