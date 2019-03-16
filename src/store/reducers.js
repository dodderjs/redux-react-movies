import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import C from '../constants';

export const errors = (state = [], action) => {
	switch (action.type) {
	case C.ADD_ERROR:
		return [
			...state,
			action.payload,
		];

	case C.CLEAR_ERROR:
		return state.filter((message, i) => i !== action.payload);

	default:
		return state;
	}
};

export default (history) => combineReducers({
	errors,
	router: connectRouter(history),
});
