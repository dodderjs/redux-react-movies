import React from 'react';
import { PropTypes } from 'prop-types';
import { IoIosClose as CloseButton } from 'react-icons/io';

const ShowErrors = ({ errors = [], onClearError = f => f }) => (
	<div className="show-errors">
		{(errors.length)
			? errors.map((message, i) => (
				<div key={message} className="error">
					<p>{message}</p>
					<CloseButton onClick={() => onClearError(i)} />
				</div>
			)) : null
		}
	</div>
);


ShowErrors.propTypes = {
	errors: PropTypes.arrayOf.string.isRequired,
	onClearError: PropTypes.func.isRequired,
};

export default ShowErrors;
