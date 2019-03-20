import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import ERROR from '../constants/error';
import userReducer from './userReducer';
import mediaReducer from './mediaReducer';

export const errors = (state = [], action) => {
	switch (action.type) {
	case ERROR.ADD:
		return [
			...state,
			action.payload,
		];

	case ERROR.CLEAR:
		return state.filter((message, i) => i !== action.payload);

	default:
		return state;
	}
};

export default (history) => combineReducers({
	errors,
	user: userReducer,
	medias: mediaReducer,
	router: connectRouter(history),
});
