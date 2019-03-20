import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'react-tv-navigation';

const Button = ({
	type, focused, setFocus, focusPath, onEnterPressHandler, children, className, ...buttonProps
}) => {
	const _className = `${className}${focused ? ' focused' : ''} `;
	// eslint-disable-next-line react/button-has-type
	return (<button className={_className} type={type} {...buttonProps}>{children}</button>);
};

Button.propTypes = {
	label: PropTypes.string,
	type: PropTypes.oneOf(['submit', 'button', 'reset']),
	focused: PropTypes.bool,
	setFocus: PropTypes.func,
	focusPath: PropTypes.string,
	onEnterPressHandler: PropTypes.func,
	children: PropTypes.node.isRequired,
	className: PropTypes.string
};

Button.defaultProps = {
	focused: false,
	setFocus: null,
	focusPath: '',
	onEnterPressHandler: null,
	type: 'button',
	label: '',
	className: ''
};

export default withFocusable(Button);
