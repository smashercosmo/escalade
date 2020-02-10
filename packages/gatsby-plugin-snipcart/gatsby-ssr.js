'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warning = false;
var linkToLangFile = null;

exports.onRenderBody = function (_ref) {
	var setPostBodyComponents = _ref.setPostBodyComponents;
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	options = Object.assign({
		apiKey: process.env.GATSBY_SNIPCART_API_KEY,
		autopop: false,
		js: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
		jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
		styles: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
		language: '' + linkToLangFile
	}, options);

	if (!options.apiKey) {
		if (!warning) {
			warning = true;
			console.log('No Snipcart API key found');
		}
		return;
	}

	var components = [_react2.default.createElement('script', { key: 'snipcartJs', src: options.js, id: 'snipcart', 'data-api-key': options.apiKey, 'data-autopop': options.autopop })];
	if (options.jquery) {
		components.unshift(_react2.default.createElement('script', { key: 'snipcartJquery', src: options.jquery }));
	}
	if (options.styles) {
		components.push(_react2.default.createElement('link', { key: 'snipcartStyle', href: options.styles, type: 'text/css', rel: 'stylesheet' }));
	}
	if (options.language) {
		components.push(_react2.default.createElement('script', { key: 'snipcartLanguage', src: options.language }));
	}

	return setPostBodyComponents(components);
};