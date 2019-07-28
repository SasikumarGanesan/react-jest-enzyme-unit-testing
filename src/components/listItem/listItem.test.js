import React from 'react';
import {shallow } from 'enzyme';
import { findByTestAtrr, checkProps} from './../../../utils/index';

import ListItem from './index';


describe('List Item Component', () => {
    
    describe('Checking proptypes', () => {
        
        it('Should NOT thorw warning', () => {
            const expectedProps = {
                title: 'Post 1',
                desc: 'This is book'
            };

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() =>{
            const props = {
                title: 'Post 1',
                desc: 'This is book'
            };

            wrapper = shallow(<ListItem {...props}/>)
        });

        it('Shoud render a List withour error', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Shoud render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Shoud render a description', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });

    });

    describe('Shoud Not Renders', () => {
        let wrapper;
        beforeEach(() =>{
            const props = {
                desc: 'This is book'
            };

            wrapper = shallow(<ListItem {...props}/>)
        });

        it('Component is NOT rendered', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });
    });
});