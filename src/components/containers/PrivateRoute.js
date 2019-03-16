import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

class PrivateRoute extends Route {
	render() {
		const { authenticated, location } = this.props;

		return authenticated ? super.render() : (
			<Redirect to={{
				pathname: '/login',
				state: { from: location },
			}}
			/>
		);
	}
}

PrivateRoute.propTypes = {
	location: ReactRouterPropTypes.location.isRequired,
	authenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
	authenticated: state.user.authenticated,
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
