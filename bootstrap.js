// Tell each ViewRender instance to load jQuery
alchemy.hawkejs.on({type: 'viewrender', status: 'begin', client: false}, function onBegin(viewRender) {

	// @todo: add support for local fallback
	viewRender.script('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
});