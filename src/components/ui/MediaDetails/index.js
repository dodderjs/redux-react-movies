import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdArrowBack } from 'react-icons/md';
import { withNavigation } from 'react-tv-navigation';
import { baseURL } from '../../../configs';
import MediaImage from '../MediaImage';
import FocusableButton from '../FocusableButton';
import FocusableLink from '../FocusableLink';
import VideoPlayer from '../VideoPlayer';


import './MediaDetails.scss';

// const FocusableVideoPlayer = withFocusable(({ focused, ...props }) => <VideoPlayer className={focused ? 'focused' : ''} {...props} />);

class MediaDetails extends Component {
	state = {
		isVideoPlaying: false,
	};

	playMedia = () => {
		const { setFocus } = this.props;
		setFocus('videoPlayer');

		this.setState((state) => ({
			isVideoPlaying: !state.isVideoPlaying
		}));
	}

	render() {
		const {
			backTo,
			item:
			{
				imageSrc, description, genre, title, rating, length, videoSrc, releaseDate
			}
		} = this.props;
		const { isVideoPlaying } = this.state;

		return (
			<div className="media-details">
				<div className="media-details__header">
					<FocusableLink
						to={backTo}
						focusPath="backButton"
						className="media-details__button-back"
					>
						<span>
							<MdArrowBack />
							{'Back'}
						</span>
					</FocusableLink>
					<FocusableButton
						type="button"
						focusPath="playButton"
						onClick={this.playMedia}
						onEnterPress={this.playMedia}
						className="media-details__button-play"
					>
						<span>Play Trailer</span>
					</FocusableButton>
				</div>
				<MediaImage imageSrc={`${baseURL}/${imageSrc}`} />

				<div className="media-details__container">
					<h1 className="media-details__title">{title}</h1>
					<div className="media-details__infobar">
						<span className="media-rating media-details__rating">
							{rating}
						</span>
						<span className="media-details__infobar-item">
							<span className="label">Genre:</span>
							{genre}
						</span>
						<span className="media-details__infobar-item">
							<span className="label">Release Date:</span>
							{releaseDate}
						</span>
						<span className="media-details__infobar-item">
							<span className="label">Runtime:</span>
							{length}
						</span>
					</div>
					<p className="media-details__description">{ description }</p>
					<div className="media-details__trailer">
						<h2>Watch the trailer</h2>
						<VideoPlayer
							videoSrc={videoSrc}
							isPlaying={isVideoPlaying}
							focusPath="videoPlayer"
						/>
					</div>
				</div>
			</div>
		);
	}
}

MediaDetails.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number,
		logo: PropTypes.string,
		type: PropTypes.string
	}),
	setFocus: PropTypes.func,
	backTo: PropTypes.string
};

MediaDetails.defaultProps = {
	item: {},
	setFocus: null,
	backTo: '/'
};

export default withNavigation(MediaDetails);
