#!/usr/bin/env node

var WebHook = require('../lib/web').WebHook;

var myhook = new WebHook({
	name: "web-hook",
	debug: true,
	autoheal: true
});

myhook.start();

/* End of file web.js */
/* Location: ./web/bin/web.js */
