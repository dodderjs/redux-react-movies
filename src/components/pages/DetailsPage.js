import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import { getDetails } from '../../actions/mediaActions';
import MediaDetails from '../ui/MediaDetails';
import Loader from '../ui/Loader';

class DetailsPage extends React.PureComponent {
	componentDidMount() {
		const { id, media, loadDetails } = this.props;

		if (!media) {
			loadDetails(id);
		}
	}

	render() {
		const {
			id,
			media,
			isLoading,
			location: { from = '/' }
		} = this.props;

		return isLoading || !media ? <Loader /> : (
			<div>
				<MediaDetails id={id} item={media} isLoading={isLoading} backTo={from} />
			</div>
		);
	}
}

DetailsPage.propTypes = {
	media: PropTypes.shape({
		id: PropTypes.number
	}),
	id: PropTypes.string.isRequired,
	isLoading: PropTypes.bool,
	loadDetails: PropTypes.func,
	location: ReactRouterPropTypes.location.isRequired
};

DetailsPage.defaultProps = {
	media: null,
	isLoading: false,
	loadDetails: null
};

const mapStateToProps = (state, ownProps) => {
	const { match: { params: { id } } } = ownProps;
	const { medias: { items, isLoading } } = state;
	const media = items.find(item => item.id === Number.parseInt(id, 10));
	return {
		id,
		media,
		isLoading
	};
};

const mapDispatchToProps = dispatch => ({
	loadDetails: (id) => dispatch(getDetails(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsPage));
