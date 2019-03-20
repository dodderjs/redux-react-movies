import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'react-tv-navigation';

import './VideoPlayer.scss';

class VideoPlayer extends PureComponent {
	videoRef = React.createRef();

	componentWillReceiveProps({ isPlaying: currentIsPlaying }) {
		const { isPlaying } = this.props;
		if (currentIsPlaying !== isPlaying) {
			const player = this.videoRef.current;

			this.scrollToVideo();
			player.play();
		}
	}

	scrollToVideo = () => {
		window.scrollTo({
			top: this.videoRef.current.offsetTop - 50,
			behavior: 'smooth'
		});
	}

	render() {
		const { videoSrc, className } = this.props;

		// eslint-disable-next-line jsx-a11y/media-has-caption
		return (<video ref={this.videoRef} className={`video-player ${className}`} src={videoSrc} controls />);
	}
}

VideoPlayer.propTypes = {
	videoSrc: PropTypes.string.isRequired,
	className: PropTypes.string,
	isPlaying: PropTypes.bool
};

VideoPlayer.defaultProps = {
	className: '',
	isPlaying: false
};

export default withFocusable(VideoPlayer);
