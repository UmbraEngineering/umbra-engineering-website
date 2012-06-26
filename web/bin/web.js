#!/usr/bin/env node

var WebHook = require('../lib/web').Web;

var hook = global.webHook = new WebHook({
	name: 'web-hook',
	debug: true,
	autoheal: true
});

hook.start();

