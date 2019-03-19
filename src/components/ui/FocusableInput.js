import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'react-tv-navigation';

const Input = ({
	focused, setFocus, focusPath, onEnterPressHandler, ...inputProps
}) => (<input className={`input-field${focused ? ' focused' : ''}`} {...inputProps} />);

Input.propTypes = {
	focused: PropTypes.bool,
	setFocus: PropTypes.func,
	focusPath: PropTypes.string,
	onEnterPressHandler: PropTypes.func
};

Input.defaultProps = {
	focused: false,
	setFocus: null,
	focusPath: '',
	onEnterPressHandler: null
};

export default withFocusable(Input);
