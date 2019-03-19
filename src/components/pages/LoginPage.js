import React from 'react';
import { PropTypes } from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../../actions/userActions';
import LoginForm from '../ui/LoginForm';

class LoginPage extends React.PureComponent {
	render() {
		const { authenticated, loginUser, isLoading } = this.props;
		const { location: { from = '/' } } = this.props;

		return authenticated ? (<Redirect to={from} />) : (
			<LoginForm loginUser={loginUser} isLoading={isLoading} />
		);
	}
}

LoginPage.propTypes = {
	location: ReactRouterPropTypes.location.isRequired,
	loginUser: PropTypes.func.isRequired,
	authenticated: PropTypes.bool,
	isLoading: PropTypes.bool
};

LoginPage.defaultProps = {
	authenticated: false,
	isLoading: false
};

const mapStateToProps = state => ({
	authenticated: state.user.authToken && state.user.userName,
	isLoading: state.user.isLoading
});
const mapDispatchToProps = dispatch => ({
	loginUser: (userName, password) => dispatch(login(userName, password)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
