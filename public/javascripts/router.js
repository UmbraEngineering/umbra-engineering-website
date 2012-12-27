
Class('Router').Extends('AppObject', {

	routes: null,

	variablePattern: /:([^\/]+)/g,

	initialize: function(routes) {
		this.routes = [ ];
		
		for (var uri in routes) {
			if (routes.hasOwnProperty(uri)) {
				this.parseRoute(uri, routes[uri]);
			}
		}
	},

	parseRoute: function(uri, func) {
		var result = {
			uri: uri,
			func: func,
			params: [ ]
		};

		result.regex = uri.replace(this.variablePattern, function(match, $1) {
			result.params.push($1);
			return '([^/]+)';
		});
		this.variablePattern.lastIndex = 0;

		result.regex = new RegExp('^' + result.regex + '$');

		this.routes.push(result);
	},

	find: function(href) {
		for (var i = 0, c = this.routes.length; i < c; i++) {
			var route = this.routes[i];
			var match = route.regex.exec(href);
			if (match) {
				return this.prepareMatch(href, route, match);
			}
		}
		
		return null;
	},

	prepareMatch: function(href, route, match) {
		var params = { };
		for (var i = 0, c = route.params.length; i < c; i++) {
			params[route.params[i]] = match[i + 1] || null;
		}

		return {
			func: route.func,
			href: href,
			params: params
		};
	}

});
