import MEDIA from '../constants/media';

export const initialState = {
	items: [],
	isLoading: false,
	errorMsg: null
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
	case MEDIA.GET:
		return {
			...initialState,
			isLoading: true,
		};
	case MEDIA.FETCH_FULFILLED: {
		return {
			...initialState,
			items: payload.flatMap(elem => elem.items),
			isLoading: false
		};
	}
	case MEDIA.FETCH_REJECTED:
		return {
			...initialState,
			errorMsg: payload,
			isLoading: false
		};
	default:
		return state;
	}
};
