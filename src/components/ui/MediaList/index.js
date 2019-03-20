import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import MediaItem from '../MediaItem';

import './MediaList.scss';

class MediaList extends PureComponent {
	render() {
		const { isLoading, items, currentFocusPath } = this.props;

		return isLoading ? <Loader /> : (
			<ul className="media-list clear">
				{ items.map((item, index) => (
					<li key={item.id} className="media-list-element">
						<MediaItem
							key={item.id}
							media={item}
							focused={currentFocusPath === null && index === 0}
							focusPath={`media-${item.id}`}
						/>
					</li>
				))}
			</ul>
		);
	}
}

MediaList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		logo: PropTypes.string,
		type: PropTypes.string
	})).isRequired,
	isLoading: PropTypes.bool,
	currentFocusPath: PropTypes.string
};

MediaList.defaultProps = {
	isLoading: false,
	currentFocusPath: null
};

export default MediaList;
