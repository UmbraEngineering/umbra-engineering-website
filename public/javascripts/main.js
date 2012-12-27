
app.router = new app.Router({
	'/':                  app.IndexPageView,
	'/index':             app.IndexPageView,
	'/services':          app.ServicesPageView,
	'/contact':           app.ContactPageView,
	'/portfolio':         app.PortfolioPageView,
	'/open-source':       app.OpenSourcePageView,
	'/careers':           app.CareersPageView,
	'/careers/:opening':  app.CareersPageView
});

//
// When the app is ready, start initializing things
//
app.on('ready', function() {

	// When a statechange (popstate) event occurs, load the appropriate page
	app.on('history.statechange', function(state) {
		app.drawPage(state.hash);
	});

	// Listen for history.statechange events and reemit them
	if (History.enabled) {
		$(window).on('statechange', function() {
			app.emit('history.statechange', History.getState());
		});
	}

	// Initialize the layout view
	app.layout = new app.LayoutView();

	// Render the first page
	app.drawPage(location.pathname);

	// DEBUG Show a development warning
	setTimeout(function() {
		app.MessageView.create('This site is under construction; Some aspects may not function correctly.');
	}, 1000);
});

// -------------------------------------------------------------

//
// Draw the appropriate page for a given href
//
app.drawPage = function(href) {
	if (href.charAt(0) !== '/') {
		href = '/' + href;
	}

	var view = app.router.find(href);

	// If no matching view was found, draw a 404 error
	if (! view) {
		hideCurrent(draw404);
	}

	// If we already have one of these views open, send it a message
	else if (app.currentPage && app.currentPage instanceof view.func) {
		app.currentPage.load(view.href, view.params);
	}

	// Otherwise, create/draw the new view
	else {
		hideCurrent(drawNew);
	}

	// -------------------------------------------------------------

	function hideCurrent(callback) {
		if (app.currentPage) {
			app.currentPage.hide(function() {
				app.currentPage.destroy();
				callback();
			});
		} else {
			callback();
		}
	}

	function draw404() {
		app.currentPage = new app.ErrorPageView({
			code: 404,
			name: 'Not Found',
			message: 'The page you requested could not be found'
		});
		app.currentPage.draw();
		app.currentPage.show();
	}

	function drawNew() {
		app.currentPage = new view.func(view.href, view.params);
		app.currentPage.draw();
		app.currentPage.show();
	}
};
