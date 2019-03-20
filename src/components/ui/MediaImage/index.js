import React from 'react';
import PropTypes from 'prop-types';

import './MediaImage.scss';

const MediaImage = ({ imageSrc }) => <div className="media-image" style={{ backgroundImage: `url(${imageSrc})` }} />;

MediaImage.propTypes = {
	imageSrc: PropTypes.string.isRequired,
};

export default MediaImage;
