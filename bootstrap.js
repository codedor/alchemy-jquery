// Send the menu options to the client
alchemy.on('alchemy.render', function(settings, callback) {

	// Only send this data on the initial pageload
	if (!settings.ajax) {

		var path = '/public/scripts/jquery.js',
		    cdn  = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';

		if (!settings.payload.request) {
			settings.payload.request = {};
		}

		if (!settings.payload.request.tags) {
			settings.payload.request.tags ={};
		}

		// Add the CDN script
		settings.payload.request.tags[cdn] = {
			type: 'script',
			path: cdn,
			block: 'head',
			order: 1001,
			suborder: 1000
		};

		// Add the local fallback script
		settings.payload.request.tags[path] = {
			type: 'script',
			code: "window.jQuery || document.write('<scr' + 'ipt src=\"" + path + "\"><\/scr' + 'ipt>')",
			block: 'head',
			force: true,
			order: 1000,
			suborder: 1000
		};
	}

	callback();
});