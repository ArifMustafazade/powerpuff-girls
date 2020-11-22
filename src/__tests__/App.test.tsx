import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

// components
import App from '../App';

/** tests */
describe('<App />', () => {
    let wrapper: ShallowWrapper<any>;

    beforeEach(() => {
        wrapper = shallow(<App />);
    })

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render with correct title', () => {
        expect(wrapper.find('.App-header').text()).toBe('Hello');
    });

})



