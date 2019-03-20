import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withFocusable } from 'react-tv-navigation';
import { baseURL } from '../../../configs';
import MediaImage from '../MediaImage';

import './MediaItem.scss';

const MediaItem = ({ media, focused }) => (
	<Link to={`/details/${media.id}`} className={`media-list-item${(focused) ? ' focused' : ''}`}>
		<MediaImage imageSrc={`${baseURL}/${media.logoSrc}`} />
		<div className="media-list-item__info">
			<h2 className="media-list-item__title">
				{media.title}
			</h2>
			<div className="visible-on-focus">
				<span className="media-rating">{media.rating}</span>
				<strong className="media-type">
					{media.type}
				</strong>
				{' '}
				<span className="media-genre">{media.genre}</span>
				<div className="media-release-date">
					{media.releaseDate}
				</div>
			</div>
		</div>
	</Link>
);

MediaItem.propTypes = {
	media: PropTypes.shape({
		id: PropTypes.number,
		logo: PropTypes.string,
		type: PropTypes.string
	}).isRequired,
	focused: PropTypes.bool,
};

MediaItem.defaultProps = {
	focused: false,
};

export default withFocusable(MediaItem);
