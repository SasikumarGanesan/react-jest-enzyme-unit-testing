import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore} from './../utils';
import App from './App';

const setUp = (initialState = []) => {
 const store =  testStore(initialState);
 const wrapper = shallow(<App  store={store}/>).childAt(0).dive();
 return wrapper;
};

describe('App Component', () => {
    let wrapper;
    beforeEach(()=> {
        const initialState = {
            posts: [
                {
                    title: 'Example title 1',
                    body: 'Some Text'
                },
                {
                    title: 'Example title 2',
                    body: 'Some Text'
                }
            ]
        };

        wrapper =  setUp(initialState);
    });

    it('Should render without error', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

    it('exampleMethod_updatesState Method should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    });

    it('exampleMethod_returnsAValue Method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(6);
        expect(newValue).toBe(7);
    });
});