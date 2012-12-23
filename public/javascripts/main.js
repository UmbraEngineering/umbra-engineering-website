
app.routes = {
	'/':             app.IndexPageView,
	'/index':        app.IndexPageView,
	'/services':     app.ServicesPageView,
	// '/contact':      app.ContactPageView,
	'/portfolio':    app.PortfolioPageView,
	'/open-source':  app.OpenSourcePageView,
	'/careers':      app.CareersPageView
};

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
	
});

// -------------------------------------------------------------

//
// Draw the appropriate page for a given href
//
app.drawPage = function(href) {
	if (href.charAt(0) !== '/') {
		href = '/' + href;
	}

	if (app.currentPage) {
		app.currentPage.hide(function() {
			app.currentPage.destroy();
			drawNew();
		});
	} else {
		drawNew();
	}

	function drawNew() {
		app.currentPage = new app.routes[href]();
		app.currentPage.draw();
		app.currentPage.show();
	}
};
