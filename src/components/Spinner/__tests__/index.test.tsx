import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

// components
import { Spinner } from '../';

/** tests */
describe('<Spinner />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<Spinner />);
    });

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
