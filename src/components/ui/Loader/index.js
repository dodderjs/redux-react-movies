import React from 'react';
import PropTypes from 'prop-types';

import './spinner.scss';

const Loader = (props) => {
	const { className } = props;
	const finalClassName = `${className} spinner`;

	return (
		<div className={finalClassName}>
			<i>&nbsp;</i>
			<i>&nbsp;</i>
			<i>&nbsp;</i>
			<i>&nbsp;</i>
		</div>

	);
};

Loader.propTypes = {
	className: PropTypes.string,
};

Loader.defaultProps = {
	className: '',
};

export default Loader;
