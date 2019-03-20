import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	getMedia,
	getMediaFulfilled,
	getMediaRejected
} from './mediaActions';
import MEDIA from '../constants/media';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('Media Actions', () => {
	beforeEach(() => {
		store.clearActions();
	});

	it('Dispatches the correct action and payload', () => {
		const error = new Error('Network Error');

		const expectedActions = [
			{
				type: MEDIA.GET,
			},
			{
				type: MEDIA.FETCH_FULFILLED,
				payload: [1, 2, 3],
			},
			{
				type: MEDIA.FETCH_REJECTED,
				payload: error,
				error: true,
			}
		];

		store.dispatch(getMedia());
		store.dispatch(getMediaFulfilled([1, 2, 3]));
		store.dispatch(getMediaRejected(error));

		expect(store.getActions()).toEqual(expectedActions);
	});
});
