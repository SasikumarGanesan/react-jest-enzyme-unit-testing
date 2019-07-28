import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../../utils';
import Headline from './index';

const setUp = (props = {}) => {
    const component = shallow(<Headline { ...props} />);
    return component;
};

describe('Headline Component', () => {

    describe('Checking PropTypes', ()=> {
        it('Should not throw warning', () => {
            const expectedProps ={
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test Fname',
                    lName: 'Test Lname',
                    email: 'test@gmail.com',
                    age: 29,
                    onlineStatus: false
                }]
            };

            const propsErr = checkProps(Headline.prototypes, expectedProps);
            expect(propsErr).toBeUndefined(); 
        });
    });

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        });


    });

});