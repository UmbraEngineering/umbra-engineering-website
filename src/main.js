
// Initialize internationalization
require('i18n');

// Set up templates
var handlebars = require('cloak.view.handlebars');
var templating = require('cloak.view/src/templating');
var templates  = handlebars.runtime(require('templates'));
templating.registerEngine('handlebars', templates);

// Start the router
require('routers');

// Draw the header
var header = document.getElementById('header');
var Header = require('views/header');
Header.create(header);

// Draw the footer
var footer = document.getElementById('footer');
var Footer = require('views/footer');
Footer.create(footer);
