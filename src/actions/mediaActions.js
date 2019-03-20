import MEDIA from '../constants/media';
import { moviesURL, seriesURL, detailsURL } from '../configs';


const makeRequests = (urls, config) => urls.map(async url => {
	try {
		const response = await fetch(url, config);
		if (!response.ok) {
			throw new Error('Nothing there');
		}

		return response.json();
	} catch (error) {
		throw new Error(`Fetch wasn't successful ${error}`);
	}
});

export const getMedia = () => ({
	type: MEDIA.GET
});

export const getMediaFulfilled = (payload) => ({
	type: MEDIA.FETCH_FULFILLED,
	payload
});

export const getMediaRejected = (error) => ({
	type: MEDIA.FETCH_REJECTED,
	payload: error,
	error: true,
});

export const fetchMedias = (...urls) => async (dispatch, getState) => {
	dispatch(getMedia());
	try {
		const { authToken } = getState().user;
		const config = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-SimpleOvpApi': authToken,
			}
		};
		const response = await Promise.all(makeRequests(urls, config));

		dispatch(getMediaFulfilled(response));
	} catch (error) {
		dispatch(getMediaRejected(error));
	}
};

export const getAllMedia = () => fetchMedias(moviesURL, seriesURL);
export const getDetails = (id) => fetchMedias(detailsURL + id);
