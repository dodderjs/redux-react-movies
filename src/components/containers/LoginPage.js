import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from '../../actions';
import LoginPage from '../ui/LoginPage';

const mapStateToProps = state => ({
	authenticated: state.user.authenticated,
});
const mapDispatchToProps = dispatch => ({
	login: () => dispatch(login()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
