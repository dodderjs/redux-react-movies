import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'react-tv-navigation';

const Button = ({
	label, type, focused, setFocus, focusPath, onEnterPressHandler, ...buttonProps
// eslint-disable-next-line react/button-has-type
}) => (<button type={type} {...buttonProps}>{label}</button>);

Button.propTypes = {
	label: PropTypes.string,
	type: PropTypes.oneOf(['submit', 'button', 'reset']),
	focused: PropTypes.bool,
	setFocus: PropTypes.func,
	focusPath: PropTypes.string,
	onEnterPressHandler: PropTypes.func
};

Button.defaultProps = {
	focused: false,
	setFocus: null,
	focusPath: '',
	onEnterPressHandler: null,
	type: 'button',
	label: ''
};

export default withFocusable(Button);
