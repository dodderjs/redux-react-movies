import mediaReducer, { initialState } from './mediaReducer';
import MEDIA from '../constants/media';

describe('Media Reducer', () => {
	it('Sets the initial state', () => {
		const action = { type: 'NOT_MEDIA_ACTION' };

		expect(mediaReducer(undefined, action)).toEqual(initialState);
	});

	it('Sets the loading state on MEDIA_GET', () => {
		const action = { type: MEDIA.GET };

		expect(mediaReducer(undefined, action)).toEqual({
			...initialState,
			isLoading: true,
		});
	});

	it('Saves the media data to the store on MEDIA_FETCH_FULFILLED', () => {
		const mediaData = [{ items: [{ id: 1 }, { id: 2 }, { id: 3 }] }, { items: [{ id: 4 }, { id: 5 }, { id: 6 }] }];
		const transformedMediaData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

		const action = {
			type: MEDIA.FETCH_FULFILLED,
			payload: mediaData
		};

		expect(mediaReducer(undefined, action)).toEqual({
			...initialState,
			items: transformedMediaData
		});
	});

	it('Throws an error message on MEDIA_FETCH_REJECTED', () => {
		const errorMsg = 'Couldn\'t get media!';
		const action = {
			type: MEDIA.FETCH_REJECTED,
			payload: errorMsg,
		};

		expect(mediaReducer(undefined, action)).toEqual({
			...initialState,
			errorMsg,
		});
	});
});
