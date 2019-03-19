import USER from '../constants/user';
import { loginURL } from '../../configs';

export const logout = () => ({
	type: USER.LOGOUT,
});

export const getUser = (userName, password) => ({
	type: USER.GET,
	payload: {
		userName,
		password,
	},
});

export const getUserFulfilled = userData => ({
	type: USER.FETCH_FULFILLED,
	payload: userData,
});

export const getUserRejected = error => ({
	type: USER.FETCH_REJECTED,
	payload: error,
	error: true,
});

export const login = (userName, password) => async (dispatch) => {
	dispatch(getUser(userName, password));
	try {
		const result = await fetch(loginURL, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: userName,
				password,
			})
		});
		const authToken = result.headers.get('X-SimpleOvpApi');

		if (result.ok) {
			dispatch(getUserFulfilled({ userName, authToken }));
		} else {
			dispatch(getUserRejected(await result.json()));
		}
	} catch (error) {
		dispatch(getUserRejected(error));
	}
};
