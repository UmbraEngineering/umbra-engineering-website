this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["careers-opening"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<li>";
  stack1 = typeof depth0 === functionType ? depth0.apply(depth0) : depth0;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\r\n		";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<li>";
  stack1 = typeof depth0 === functionType ? depth0.apply(depth0) : depth0;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\r\n		";
  return buffer;}

  buffer += "<h3>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\r\n<p>\r\n	";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\r\n</p>\r\n<div class=\"career-more\">\r\n	<h4>Requirements</h4>\r\n	<ul class=\"career-requirements\">\r\n		";
  stack1 = depth0.requirements;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n	<h4>What We're Offering</h4>\r\n	<ul class=\"career-offerings\">\r\n		";
  stack1 = depth0.offered;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n</div>";
  return buffer;};

this["app"]["templates"]["careers"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<li>\r\n				<a href=\"/careers/";
  stack1 = depth0.slug;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</a>\r\n			</li>\r\n			";
  return buffer;}

  buffer += "<div class=\"content-section\">\r\n	<div class=\"row\">\r\n		<h3>Careers</h3>\r\n		<p>\r\n			At Umbra, we are currently looking to expand. If you have skills and are interested in working with\r\n			us, take a look below at the positions we are looking to fill. If you would like to apply for one of\r\n			these positions, please <a href=\"/contact\">contact us</a> with some info about yourself and links to\r\n			any relevant websites (like a GitHub, LinkedIn, etc.)\r\n		</p>\r\n	</div>\r\n	<div class=\"row\">\r\n		<ul class=\"careers-openings\">\r\n			";
  stack1 = depth0.openings;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</ul>\r\n	</div>\r\n	<div class=\"row careers-current\"></div>\r\n</div>\r\n";
  return buffer;};

this["app"]["templates"]["contact"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		<div class=\"social-icon\">\r\n			<a href=\"";
  stack1 = depth0.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" rel=\"external\">\r\n				<img src=\"/images/";
  stack1 = depth0.img;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" width=\"64\" height=\"64\" alt=\"";
  stack1 = depth0.alt;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" title=\"\" />\r\n				<span>";
  stack1 = depth0.text;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\r\n			</a>\r\n		</div>\r\n		";
  return buffer;}

  buffer += "<div class=\"content-section\">\r\n	<div class=\"row\">\r\n		<h3>Contact Us</h3>\r\n		<p>\r\n			Want to work with us? Feel free to use the form below to contact us and we'll try to\r\n			get back to you soon.\r\n		</p>\r\n		<form action=\"/contact\" method=\"post\" id=\"contact-form\">\r\n			\r\n			";
  buffer += "\r\n			<fieldset class=\"basics four columns\">\r\n			\r\n				<label class=\"name required\">\r\n					<div class=\"label\">Name</div>\r\n					<input type=\"text\" name=\"name\" value=\"";
  stack1 = depth0.prefill;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" placeholder=\"eg. Joe Bob\" required />\r\n				</label>\r\n				\r\n				<label class=\"company\">\r\n					<div class=\"label\">Company</div>\r\n					<input type=\"text\" name=\"company\" value=\"";
  stack1 = depth0.prefill;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.company;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"\r\n						placeholder=\"eg. Joe Bob's Awesome Shop\" />\r\n				</label>\r\n				\r\n				<label class=\"email required\">\r\n					<div class=\"label\">Email</div>\r\n					<input type=\"email\" name=\"email\" value=\"";
  stack1 = depth0.prefill;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.email;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"\r\n						placeholder=\"eg. joebob@example.com\" required />\r\n				</label>\r\n				\r\n				<label class=\"reason required\" for=\"reason\">\r\n					<div class=\"label\">Reason for Contact</div>\r\n				</label>\r\n				\r\n				<ul class=\"reasons radios\">\r\n					<li><label>\r\n						<input type=\"radio\" name=\"reason\" value=\"request-quote\" /> Request a Quote\r\n					</label></li>\r\n					<li><label>\r\n						<input type=\"radio\" name=\"reason\" value=\"request-info\" /> Request Information\r\n					</label></li>\r\n					<li><label>\r\n						<input type=\"radio\" name=\"reason\" value=\"other\" /> Other:\r\n						<input type=\"text\" name=\"reason-other\" value=\"";
  stack1 = depth0.prefill;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1['reason-other'];
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"\r\n							placeholder=\"Enter reason here...\" />\r\n					</label></li>\r\n				</ul>\r\n				\r\n			</fieldset>\r\n			\r\n			";
  buffer += "\r\n			<fieldset class=\"message eight columns\">\r\n			\r\n				<label class=\"message required\">\r\n					<div class=\"label\">Message</div>\r\n					<textarea name=\"message\" placeholder=\"Type you message here...\" required>";
  stack1 = depth0.prefill;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.message;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</textarea>\r\n				</label>\r\n				\r\n				<div class=\"buttons\">\r\n					<input type=\"reset\" value=\"Clear Form\" class=\"reset\" />\r\n					<input type=\"submit\" value=\"Send Message\" class=\"submit\" />\r\n					<div class=\"spinner\"></div>\r\n				</div>\r\n				\r\n			</fieldset>\r\n		</form>\r\n	</div>\r\n</div>\r\n<div class=\"content-section darker-1\">\r\n	<div class=\"row\">\r\n		<h3>Connect With Us</h3>\r\n		<p>\r\n			Use Facebook? Twitter? LinkedIn? Find us all over the internet!\r\n		</p>\r\n		";
  stack1 = depth0.socialIcons;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n</div>\r\n";
  return buffer;};

this["app"]["templates"]["error"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content-section\">\r\n	<div class=\"row\">\r\n		<h3>Error ";
  foundHelper = helpers.code;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.code; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ": ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\r\n		<p>\r\n			";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\r\n		</p>\r\n	</div>\r\n</div>";
  return buffer;};

this["app"]["templates"]["index"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<li>\r\n				<div class=\"service\">\r\n					<h4>";
  stack1 = depth0.title;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h4>\r\n					<p>\r\n						";
  stack1 = depth0.content;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					</p>\r\n				</div>\r\n			</li>\r\n			";
  return buffer;}

  buffer += "<div class=\"content-section\">\r\n	<div class=\"row\">\r\n		<h3>Welcome</h3>\r\n		<p>\r\n			Umbra Engineering is a web application development shop in Portland Oregon specializing in JavaScript, both on the client\r\n			and on the server in the form of <a href=\"http://nodejs.org\" rel=\"external\">Node.js</a>. Not only do we work for our clients,\r\n			but we also work on a number of <a href=\"/open-source\">open source projects</a>. We have a large array of skills for building\r\n			web applications.\r\n		</p>\r\n	</div>\r\n	<div class=\"row\">\r\n		<ul id=\"services\" class=\"block-grid three-up mobile\">\r\n			";
  stack1 = depth0.services;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</ul>\r\n	</div>\r\n</div>";
  return buffer;};

this["app"]["templates"]["message"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\r\n<a href=\"#\" class=\"close\">&times;</a>";
  return buffer;};

this["app"]["templates"]["open-source"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "";


  buffer += "<div class=\"content-section\">\r\n	<div class=\"row\">\r\n		<h3>Open Source</h3>\r\n		<p>\r\n			Here at Umbra Engineering, we develop a number of <a href=\"https://github.com/UmbraEngineering\" rel=\"external\">open source\r\n			works</a> which we host on GitHub. Most of these projects are small Node.js modules that we have developed for previous\r\n			projects that we release open source for the public to use. Some of these project repositories can be previewed below.\r\n		</p>\r\n	</div>\r\n	<div class=\"row\">\r\n		<div class=\"github-repos\"></div>\r\n	</div>\r\n</div>\r\n";
  return buffer;};