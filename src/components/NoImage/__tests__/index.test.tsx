import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

// components
import { NoImage } from '../';

/** tests */
describe('<NoImage />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<NoImage />);
    });

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
