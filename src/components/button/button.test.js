import React from 'react';
import {shallow } from 'enzyme';
import { findByTestAtrr, checkProps} from './../../../utils/index';

import SharedButton from './index';


describe('Shared Button Component', () => {
    describe('Checking propTypes', () => {
        it('Should NOT thorw warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {}
            };

            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
   
    describe('Renders', () => {
        let wrapper;
        let mockFunc;
        beforeEach(() =>{
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            };

            wrapper = shallow(<SharedButton {...props}/>)
        });

        it('Shoud render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('Shoud emit callback on click event', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback =  mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });
});