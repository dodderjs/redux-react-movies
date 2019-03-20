import userReducer, { initialState } from './userReducer';
import USER from '../constants/user';

describe('User Reducer', () => {
	it('Sets the initial state', () => {
		const action = { type: 'NOT_USER_ACTION' };

		expect(userReducer(undefined, action)).toEqual(initialState);
	});

	it('Sets the loading state on USER_GET', () => {
		const action = { type: USER.GET };

		expect(userReducer(undefined, action)).toEqual({
			...initialState,
			isLoading: true,
		});
	});

	it('Authenticates the user on USER_FETCH_FULFILLED', () => {
		const userName = 'test@dodder.hu';
		const authToken = 'MyTestToken';
		const action = {
			type: USER.FETCH_FULFILLED,
			payload: {
				userName,
				authToken,
			},
		};

		expect(userReducer(undefined, action)).toEqual({
			...initialState,
			authToken,
			userName,
		});
	});

	it('Throws an error message on USER_FETCH_REJECTED', () => {
		const errorMsg = 'Whoops!';
		const action = {
			type: USER.FETCH_REJECTED,
			payload: errorMsg,
		};

		expect(userReducer(undefined, action)).toEqual({
			...initialState,
			errorMsg,
		});
	});
});
