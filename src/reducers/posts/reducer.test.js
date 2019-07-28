import { types } from './../../actions/types'; 
import postsReducers from './reducer';
describe('Posts Reducers', () => {

    it('should return default state', () => {
        const newState = postsReducers(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should return new state if receiving props', () => {
        const posts = [{title: 'Test 1'}, {title: 'Test 2'}, {title: 'Test 3'}, {title: 'Test 4'}];
        const newState = postsReducers(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });
});