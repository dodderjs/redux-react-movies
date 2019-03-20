import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	getUser,
	getUserFulfilled,
	getUserRejected
} from './userActions';
import USER from '../constants/user';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('User Actions', () => {
	beforeEach(() => {
		store.clearActions();
	});

	it('Dispatches the correct action and payload', () => {
		const error = new Error('Network Error');
		const userName = 'john.doe@foobar.com';
		const password = 'Pa55w0rD!';
		const userData = {
			userName,
		};

		const expectedActions = [
			{
				type: USER.GET,
				payload: {
					userName,
					password,
				}
			},
			{
				type: USER.FETCH_FULFILLED,
				payload: userData,
			},
			{
				type: USER.FETCH_REJECTED,
				payload: error,
				error: true,
			},
		];

		store.dispatch(getUser(userName, password));
		store.dispatch(getUserFulfilled(userData));
		store.dispatch(getUserRejected(error));

		expect(store.getActions()).toEqual(expectedActions);
	});
});
