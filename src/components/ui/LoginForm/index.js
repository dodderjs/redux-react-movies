import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-tv-navigation';
import { MdLock } from 'react-icons/md';
import Loader from '../Loader';
import FocusableInput from '../FocusableInput';
import FocusableButton from '../FocusableButton';
import './login.scss';

class LoginForm extends Component {
	state = {
		userName: '',
		password: '',
	};

	onSubmit = e => {
		e.preventDefault();

		const { userName, password } = this.state;
		const { loginUser } = this.props;

		loginUser(userName, password);
	}

	handleInputChange = name => e => {
		this.setState({
			[name]: e.target.value
		});
	}

	render() {
		const {
			userName,
			password
		} = this.state;

		const { isLoading } = this.props;

		return isLoading ? <Loader /> : (
			<form id="Login" className="login-form" onSubmit={this.onSubmit}>
				<div className="login-form-title">
					<MdLock className="login-form-title__icon" />
					<h1>Sign in</h1>
				</div>
				<div className="login-form-field">
					<FocusableInput
						placeholder="Username"
						type="text"
						value={userName}
						onChange={this.handleInputChange('userName')}
						focusPath="username"
					/>
				</div>
				<div className="login-form-field">
					<FocusableInput
						placeholder="Password"
						type="password"
						value={password}
						onChange={this.handleInputChange('password')}
						focusPath="password"
					/>
				</div>
				<FocusableButton
					type="submit"
					label="Log in"
					onClick={this.onSubmit}
					focusPath="loginButton"
					className="button button-login button-block"
				/>
			</form>
		);
	}
}

LoginForm.propTypes = {
	loginUser: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,
};

LoginForm.defaultProps = {
	isLoading: false,
};

export default withNavigation(LoginForm);
