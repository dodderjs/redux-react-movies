import React from 'react';
import { PropTypes } from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Redirect } from 'react-router';

export default class LoginPage extends React.PureComponent {
	render() {
		const { location, authenticated, login } = this.props;
		const { from } = location.state || { from: { pathname: '/' } };

		return authenticated ? (<Redirect to={from} />) : (
			<form id="Login" onSubmit={login}>
				<input type="text" placeholder="e-mail or username" />
				<input type="password" placeholder="password" />

				<button type="submit" className="button button-login">LOGIN</button>
			</form>
		);
	}
}

LoginPage.propTypes = {
	location: ReactRouterPropTypes.location.isRequired,
	login: PropTypes.func.isRequired,
	authenticated: PropTypes.bool,
};

LoginPage.defaultProps = {
	authenticated: false,
};
