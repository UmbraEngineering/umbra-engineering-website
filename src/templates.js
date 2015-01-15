module.exports["views"] = module.exports["views"] || {};
module.exports["views"]["contact"] = module.exports["views"]["contact"] || {};
module.exports["views"]["contact"]["contact"] = {"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h2 class=\"title\">Contact Us</h2>\n<div class=\"errors\"></div>\n<form>\n	<div class=\"info\">\n		<label>\n			<span class=\"label\">Name</span>\n			<input type=\"text\" class=\"name\" placeholder=\"ex. Joe Bob\" />\n		</label>\n		<label>\n			<span class=\"label\">Email</span>\n			<input type=\"email\" class=\"email\" placeholder=\"ex. joebob@example.com\" />\n		</label>\n		<label>\n			<span class=\"label\">Company <small>(if applicable)</small></span>\n			<input type=\"text\" class=\"company\" placeholder=\"ex. Joe Bob's Awesome Shop\" />\n		</label>\n		<label>\n			<span class=\"label\">Company Website <small>(if applicable)</small></span>\n			<input type=\"text\" class=\"company-website\" placeholder=\"ex. www.joebobsawesomeshop.com\" />\n		</label>\n	</div>\n	<div class=\"message\">\n		<label>\n			<span class=\"label\">Message</span>\n			<textarea class=\"message\"></textarea>\n		</label>\n		<button class=\"submit\">Send Message</button>\n		<div class=\"progress-wrapper\"></div>\n	</div>\n</form>";
  },"useData":true};
module.exports["views"]["contact"]["success"] = {"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h2 class=\"title\">Contact Us</h2>\n<p class=\"success\">\n	Your message has been sent! We will try to get back to you quickly.\n</p>";
  },"useData":true};
module.exports["views"]["footer"] = module.exports["views"]["footer"] || {};
module.exports["views"]["footer"]["footer"] = {"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"content-area\">\n	<p>\n		Copyright &copy; "
    + escapeExpression(((helpers.now || (depth0 && depth0.now) || helperMissing).call(depth0, "YYYY", {"name":"now","hash":{},"data":data})))
    + " Umbra Engineering LLC<br />\n		Powered by <a href=\"http://www.nodejs.org\">Node.js</a> and <a href=\"http://www.cloakjs.com\">Cloak.js</a>.\n		Hosted on <a href=\"http://www.heroku.com\">Heroku</a>.\n	</p>\n	<div class=\"social\">\n		<a href=\"http://www.facebook.com/UmbraEngineering\" rel=\"external\">\n			<img src=\"/images/facebook.png\" width=\"32\" height=\"32\" alt=\"Find us on Facebook\" title=\"\" />\n		</a>\n		<a href=\"http://www.linkedin.com/company/umbra-engineering\" rel=\"external\">\n			<img src=\"/images/linkedin.png\" width=\"32\" height=\"32\" alt=\"Find us on LinkedIn\" title=\"\" />\n		</a>\n	</div>\n</div>";
},"useData":true};
module.exports["views"]["header"] = module.exports["views"]["header"] || {};
module.exports["views"]["header"]["header"] = {"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"content-area\">\n	<h1><a href=\"/\">Umbra Engineering</a></h1>\n	<nav>\n		<a href=\"/open-source\">Open Source</a>\n		<a href=\"/services\">Services</a>\n		<a href=\"/contact\">Contact</a>\n	</nav>\n</div>";
  },"useData":true};
module.exports["views"]["home"] = module.exports["views"]["home"] || {};
module.exports["views"]["home"]["home"] = {"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h2 class=\"title\">Professional Web Application Development</h2>\n<p>\n	Umbra Engineering is a dev shop in Portland Oregon specializing in JavaScript development in <a href=\"/services\">several different\n	environments</a>. We work on several different types of projects, from big corperate jobs to local small businesses and non-profits,\n	as well as a large amount of <a href=\"/open-source\">open source</a> work.\n</p>\n<p>\n	Take a look around, and feel free to <a href=\"/contact\">contact us</a> if you would like more information about something, or if you\n	would like to talk about working together. We would love to hear about your project.\n</p>";
  },"useData":true};
module.exports["views"]["notfound"] = module.exports["views"]["notfound"] || {};
module.exports["views"]["notfound"]["notfound"] = {"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h2 class=\"title\">Not Found</h2>\n<p>\n	We couldn't find the page you were looking for. Why not take a look at our <a href=\"/\">home page</a> and\n	look around from there?\n</p>";
  },"useData":true};
module.exports["views"]["notification"] = module.exports["views"]["notification"] || {};
module.exports["views"]["notification"]["notification"] = {"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<a class=\"close\">&times;</a>";
},"useData":true};
module.exports["views"]["open-source"] = module.exports["views"]["open-source"] || {};
module.exports["views"]["open-source"]["open-source"] = {"1":function(depth0,helpers,partials,data) {
  return "GitHub account";
  },"3":function(depth0,helpers,partials,data) {
  return "A+ compliant Promise polyfill";
  },"5":function(depth0,helpers,partials,data) {
  return "reading and writing JSON files";
  },"7":function(depth0,helpers,partials,data) {
  return "\n	running shell commands";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<h2 class=\"title\">Open Source</h2>\n<p>\n	At Umbra Engineering, we have developed a great many open source modules and libraries. We try to be an active participant in\n	the open source community. We keep this open source work up on our ";
  stack1 = ((helpers.a || (depth0 && depth0.a) || helperMissing).call(depth0, "github", "UmbraEngineering", {"name":"a","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ".\n	If you look through our repository list, you will see a lot of Node.js modules as well as a good number of client-side JavaScript\n	libraries. Everything from an ";
  stack1 = ((helpers.a || (depth0 && depth0.a) || helperMissing).call(depth0, "github", "UmbraEngineering/promise", {"name":"a","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " to basic utility modules\n	for ";
  stack1 = ((helpers.a || (depth0 && depth0.a) || helperMissing).call(depth0, "github", "UmbraEngineering/json-file", {"name":"a","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " and ";
  stack1 = ((helpers.a || (depth0 && depth0.a) || helperMissing).call(depth0, "github", "UmbraEngineering/command", {"name":"a","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ".\n</p>\n<p>\n	In addition to the many small open source projects we have released, we have also worked on some bigger scope ones as well, including\n	the sister frameworks <a href=\"http://www.cloakjs.com\">Cloak</a> and <a href=\"http://www.daggerjs.com\">Dagger</a>. Cloak is a highly\n	modular client-side MVC, and Dagger is node.js API framework. While they are designed to work together and function as a pair, they\n	are also completely capable of being used separately. In fact, this website is built using Cloak.\n</p>";
},"useData":true};
module.exports["views"]["services"] = module.exports["views"]["services"] || {};
module.exports["views"]["services"]["services"] = {"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h2 class=\"title\">We provide several different services ...</h2>\n<p>\n	While we specialize in JavaScript development, there is actually a bit of variety in what we can do with that skill. \n</p>\n<ul class=\"services\">\n	<li class=\"service\">\n		<h3>Web Application Development</h3>\n		<p>\n			We use a full JavaScript stack to build web applications, including Node.js and MongoDB for writing API servers, often using our\n			own <a href=\"http://www.daggerjs.com\">dagger.js</a> API framework. We also make use <a href=\"http://www.cloakjs.com\">cloak.js</a>,\n			dagger's sister project, for front-end development.\n		</p>\n	</li>\n	<li class=\"service\">\n		<h3>Website Development</h3>\n		<p>\n			Our front-end skills also work for the creation of more simple projects, including making websites for our clients. Need a personal\n			portfolio? Or a site for your business? We can build you a great, clean looking site that people will love to visit.\n		</p>\n	</li>\n	<li class=\"service\">\n		<h3>Desktop Application Development</h3>\n		<p>\n			Using <a href=\"http://nwjs.io/\">nw.js (previously node-webkit)</a>, we can build you a cross-platform desktop application\n			with all the same tools we use to build web apps. Whether you need an internal tool for your own business, are looking\n			to release a product to the public, or want an app to run in a kiosk in your shop, we've got you covered.\n		</p>\n	</li>\n</ul>\n<p>\n	In addition, we are also willing to provide special deals for local small businesses here in Portland, as well as for\n	non-profits. We will work with you to come to an arrangement that works for everyone.\n</p>";
  },"useData":true};