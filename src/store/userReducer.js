import USER from '../constants/user';

export const initialState = {
	userName: null,
	authToken: null,
	isLoading: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
	case USER.GET:
		return {
			...initialState,
			isLoading: true,
		};
	case USER.FETCH_FULFILLED: {
		const { userName, authToken } = payload;

		return {
			...initialState,
			userName,
			authToken,
		};
	}
	case USER.FETCH_REJECTED:
		return {
			...initialState,
			errorMsg: payload,
		};
	case USER.LOGOUT:
		return initialState;
	default:
		return state;
	}
};
