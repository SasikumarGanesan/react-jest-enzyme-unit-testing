import React from 'react';
import {
    shallow
} from 'enzyme';
import { findByTestAtrr } from '../../../utils';
import Header from './index';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without error: ', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render Logo: ', () => {
        const logo = findByTestAtrr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });
});