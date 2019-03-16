import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import App from '.';
import Whoops404 from './ui/404';

const Routes = ({ store, history }) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App>
				<Switch>
					<Route path="*" component={Whoops404} />
				</Switch>
			</App>
		</ConnectedRouter>
	</Provider>
);

Routes.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	store: PropTypes.any.isRequired,
	history: ReactRouterPropTypes.history.isRequired,
};

export default Routes;
