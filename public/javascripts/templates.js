this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["contact"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<div class=\"social-icon\">\n			<a href=\"";
  stack1 = depth0.url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" rel=\"external\">\n				<img src=\"/images/";
  stack1 = depth0.img;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" width=\"64\" height=\"64\" alt=\"";
  stack1 = depth0.alt;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" title=\"\" />\n				<span>";
  stack1 = depth0.text;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n			</a>\n		</div>\n		";
  return buffer;}

  buffer += "<div class=\"content-section\">\n	<div class=\"row\">\n		<h3>Contact Us</h3>\n		<p>\n			Want to work with us? Feel free to use the form below to contact us and we'll try to\n			get back to you soon.\n		</p>\n		<form action=\"/contact\" method=\"post\" id=\"contact-form\">\n			\n			";
  buffer += "\n			<fieldset class=\"basics four columns\">\n			\n				<label class=\"name required\">\n					<div class=\"label\">Name</div>\n					<input type=\"text\" name=\"name\" value=\"";
  stack1 = depth0.prefill;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" placeholder=\"eg. Joe Bob\" required />\n				</label>\n				\n				<label class=\"company\">\n					<div class=\"label\">Company</div>\n					<input type=\"text\" name=\"company\" value=\"";
  stack1 = depth0.prefill;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.company;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\"\n						placeholder=\"eg. Joe Bob's Awesome Shop\" />\n				</label>\n				\n				<label class=\"email required\">\n					<div class=\"label\">Email</div>\n					<input type=\"email\" name=\"email\" value=\"";
  stack1 = depth0.prefill;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.email;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\"\n						placeholder=\"eg. joebob@example.com\" required />\n				</label>\n				\n				<label class=\"reason required\" for=\"reason\">\n					<div class=\"label\">Reason for Contact</div>\n				</label>\n				\n				<ul class=\"reasons radios\">\n					<li><label>\n						<input type=\"radio\" name=\"reason\" value=\"request-quote\" /> Request a Quote\n					</label></li>\n					<li><label>\n						<input type=\"radio\" name=\"reason\" value=\"request-info\" /> Request Information\n					</label></li>\n					<li><label>\n						<input type=\"radio\" name=\"reason\" value=\"other\" /> Other:\n						<input type=\"text\" name=\"reason-other\" value=\"";
  stack1 = depth0.prefill;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1['reason-other'];
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\"\n							placeholder=\"Enter reason here...\" />\n					</label></li>\n				</ul>\n				\n			</fieldset>\n			\n			";
  buffer += "\n			<fieldset class=\"message eight columns\">\n			\n				<label class=\"message required\">\n					<div class=\"label\">Message</div>\n					<textarea name=\"message\" placeholder=\"Type you message here...\" required>";
  stack1 = depth0.prefill;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.message;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</textarea>\n				</label>\n				\n				<div class=\"buttons\">\n					<input type=\"reset\" value=\"Clear Form\" class=\"reset\" />\n					<input type=\"submit\" value=\"Send Message\" class=\"submit\" />\n					<div class=\"spinner\"></div>\n				</div>\n				\n			</fieldset>\n		</form>\n	</div>\n</div>\n<div class=\"content-section darker-1\">\n	<div class=\"row\">\n		<h3>Connect With Us</h3>\n		<p>\n			Use Facebook? Twitter? LinkedIn? Find us all over the internet!\n		</p>\n		";
  stack1 = depth0.socialIcons;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n";
  return buffer;};

this["app"]["templates"]["open-source"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "";


  buffer += "<div class=\"content-section\">\n	<div class=\"row\">\n		<h3>Open Source</h3>\n		<p>\n			Here at Umbra Engineering, we develop a number of <a href=\"https://github.com/UmbraEngineering\" rel=\"external\">open source\n			works</a> which we host on GitHub. Most of these projects are small Node.js modules that we have developed for previous\n			projects that we release open source for the public to use. Some of these project repositories can be previewed below.\n		</p>\n	</div>\n	<div class=\"row\">\n		<div class=\"github-repos\"></div>\n	</div>\n</div>\n";
  return buffer;};

this["app"]["templates"]["careers"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li>\n				<a href=\"/careers/";
  stack1 = depth0.slug;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</a>\n			</li>\n			";
  return buffer;}

  buffer += "<div class=\"content-section\">\n	<div class=\"row\">\n		<h3>Careers</h3>\n		<p>\n			At Umbra, we are currently looking to expand. If you have skills and are interested in working with\n			us, take a look below at the positions we are looking to fill.\n		</p>\n	</div>\n	<div class=\"row\">\n		<ul class=\"careers-openings\">\n			";
  stack1 = depth0.openings;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</ul>\n	</div>\n	<div class=\"row careers-current\"></div>\n</div>\n";
  return buffer;};

this["app"]["templates"]["message"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n<a href=\"#\" class=\"close\">&times;</a>";
  return buffer;};

this["app"]["templates"]["index"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li>\n				<div class=\"service\">\n					<h4>";
  stack1 = depth0.title;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</h4>\n					<p>\n						";
  stack1 = depth0.content;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</p>\n				</div>\n			</li>\n			";
  return buffer;}

  buffer += "<div class=\"content-section\">\n	<div class=\"row\">\n		<h3>Welcome</h3>\n		<p>\n			Umbra Engineering is a web application development shop in Portland Oregon specializing in JavaScript, both on the client\n			and on the server in the form of <a href=\"http://nodejs.org\" rel=\"external\">Node.js</a>. Not only do we work for our clients,\n			but we also work on a number of <a href=\"/open-source\">open source projects</a>. We have a large array of skills for building\n			web applications.\n		</p>\n	</div>\n	<div class=\"row\">\n		<ul id=\"services\" class=\"block-grid three-up mobile\">\n			";
  stack1 = depth0.services;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</ul>\n	</div>\n</div>";
  return buffer;};

this["app"]["templates"]["error"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content-section\">\n	<div class=\"row\">\n		<h3>Error ";
  foundHelper = helpers.code;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.code; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + ": ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\n		<p>\n			";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n		</p>\n	</div>\n</div>";
  return buffer;};

this["app"]["templates"]["careers-opening"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n		<li>";
  depth0 = typeof depth0 === functionType ? depth0() : depth0;
  buffer += escapeExpression(depth0) + "</li>\n	";
  return buffer;}

  buffer += "<h3>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\n<p>\n	";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n</p>\n<h4>Requirements</h4>\n<ul class=\"career-requirements\">\n	";
  stack1 = depth0.requirements;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;};