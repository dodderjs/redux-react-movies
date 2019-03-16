import React from 'react';
import { hot } from 'react-hot-loader';
import { PropTypes } from 'prop-types';

import '../stylesheets/scss/normalize.scss';
import '../stylesheets/scss/core.scss';
import '../stylesheets/scss/spinner.scss';
import '../stylesheets/scss/app.scss';

const App = hot(module)(({ children }) => (
	<div className="app">
		{children}
	</div>
));

App.propTypes = {
	children: PropTypes.node,
};
export default App;
