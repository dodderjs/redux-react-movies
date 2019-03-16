import C from '../constants';

export const addError = message => ({
	type: C.ADD_ERROR,
	payload: message,
});

export const clearError = index => ({
	type: C.CLEAR_ERROR,
	payload: index,
});
export const login = user => ({
	type: C.USER_LOGIN,
	payload: {
		...user,
		authenticated: true,
	},
});

export const logout = () => ({
	type: C.USER_LOGOUT,
	payload: {
		user: {
			authenticated: false,
		},
		token: null,
	},
});
