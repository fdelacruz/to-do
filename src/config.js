require.config({
	baseUrl: 'src',
	deps: ['main'],
	enforceDefine: true,
	paths: {
		'knockout': '../external/knockout-3.3.0',
		'smokesignals': '../external/smokesignals'
	},
	shim: {
		'smokesignals': {
			exports: 'smokesignals'
		}
	}
});
define();
