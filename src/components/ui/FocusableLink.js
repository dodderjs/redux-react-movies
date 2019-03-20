import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'react-tv-navigation';
import { Link } from 'react-router-dom';

const CustomLink = ({
	focused, className, children, ...props
}) => (<Link className={`${className}${focused ? ' focused' : ''} `} {...props}>{children}</Link>);

CustomLink.propTypes = {
	focused: PropTypes.bool,
	setFocus: PropTypes.func,
	focusPath: PropTypes.string,
	className: PropTypes.string,
	onEnterPressHandler: PropTypes.func,
	children: PropTypes.node.isRequired
};

CustomLink.defaultProps = {
	focused: false,
	setFocus: null,
	focusPath: '',
	className: '',
	onEnterPressHandler: null
};
export default withFocusable(CustomLink);
