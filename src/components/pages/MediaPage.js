import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { withNavigation } from 'react-tv-navigation';
import { getAllMedia } from '../../actions/mediaActions';
import MediaList from '../ui/MediaList';

class MediaPage extends React.PureComponent {
	componentDidMount() {
		const { getAll } = this.props;

		getAll();
	}

	render() {
		const { medias } = this.props;

		return (
			<div>
				<MediaList items={medias.items} isLoading={medias.isLoading} firstFocused />
			</div>
		);
	}
}

MediaPage.propTypes = {
	medias: PropTypes.shape({
		items: PropTypes.array,
		isLoading: PropTypes.bool
	}),
	getAll: PropTypes.func
};

MediaPage.defaultProps = {
	medias: {
		items: [],
		isLoading: false
	},
	getAll: null
};

const mapStateToProps = state => ({
	medias: state.medias
});

const mapDispatchToProps = dispatch => ({
	getAll: () => dispatch(getAllMedia())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withNavigation(MediaPage)));
