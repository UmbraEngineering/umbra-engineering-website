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
  buffer += escapeExpression(stack1) + "\">\n				<img src=\"/images/";
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

  buffer += "<div class=\"content-section\">\n	<div class=\"row\">\n		<h3>Contact Us</h3>\n		<p>\n			Want to work with us? Feel free to use the form below to contact us and we'll try to\n			get back to you soon.\n		</p>\n		<form action=\"/contact\" method=\"post\" id=\"contact-form\">\n			\n			<!-- Left Panel -->\n			<fieldset class=\"basics four columns\">\n			\n				<label class=\"name required\">\n					<div class=\"label\">Name</div>\n					<input type=\"text\" name=\"name\" value=\"";
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
  buffer += escapeExpression(stack1) + "\"\n							placeholder=\"Enter reason here...\" />\n					</label></li>\n				</ul>\n				\n			</fieldset>\n			\n			<!-- Right Panel -->\n			<fieldset class=\"message eight columns\">\n			\n				<label class=\"message required\">\n					<div class=\"label\">Message</div>\n					<textarea name=\"message\" placeholder=\"Type you message here...\" required>";
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
  


  return "<div class=\"content-section\">\n	<div class=\"row\">\n		<h3>Open Source</h3>\n		<p>\n			Here at Umbra Engineering, we develop a number of open source works which can be found on our\n			<a href=\"https://github.com/UmbraEngineering\">GitHub</a> profile. Most of the projects there are\n			small Node modules.\n		</p>\n	</div>\n</div>\n<!--\n<div class=\"content-section darker-1\">\n	<div class=\"row\">\n		<p>\n			One of our biggest open source projects is an application framework called\n			<a href=\"https://github.com/UmbraEngineering/redis-nodes\">redis-nodes</a>. It allows you to create an\n			application containing several individual processes that communicate with each other using redis\n			pub/sub. It assumes very little about your application allowing you to make any kind of project using\n			it. This is not a web-app framework like Connect or Express, but you can run one of those (or any other\n			similar framework) inside of one your redis-nodes processes.\n		</p>\n	</div>\n</div>\n-->\n";};

this["app"]["templates"]["portfolio"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"content-section\">\n	<div class=\"row\">\n		<h3>Portfolio</h3>\n		<p>\n			We have worked for a number of small companies here in Portland Oregon and enjoy helping these local\n			businesses move forward.\n		</p>\n	</div>\n</div>\n";};

this["app"]["templates"]["index"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"content-section\">\n	<div class=\"row\">\n		<h3>Welcome</h3>\n		<p>\n			Umbra Engineering is a web application development shop in Portland Oregon specializing\n			in JavaScript, both on the client and on the server in the form of <a href=\"http://nodejs.org\">Node.js</a>.\n			Not only do we work for our clients, but we also work on a number of <a href=\"/open-source\">open source\n			projects</a>.\n		</p>\n	</div>\n</div>\n<!--\n<div class=\"content-section darker-1\">\n	<div class=\"row\">\n		<h3>Clients</h3>\n		<p>\n			Umbra has done work for a number of clients right here in the Portland, OR area. We are no strangers\n			to the world of startups and aren't affraid to take on risky jobs and help you build your company. At\n			the same time, we are also glad to work for those who already have there footing and are looking to\n			keep moving forward.\n		</p>\n		<div id=\"clients\">\n			<div class=\"row\">\n				<div class=\"four columns\">\n					<a href=\"https://www.sportzing.com\" class=\"client\">\n						<img src=\"/images/szlogo-mono.png\" alt=\"SportZing\" title=\"\" />\n					</a>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n-->\n\n";};

this["app"]["templates"]["services"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"content-section\">\n	<div class=\"row\">\n		<h3>Services</h3>\n		<p>\n			We supply services in web application development using the Node.js platform.\n		</p>\n	</div>\n</div>\n<div class=\"content-section darker-1\">\n	<div class=\"row\">\n		<h3>Have a Job For Us?</h3>\n		<p>\n			If you would like to get in contact with us to talk about a job and get a quote, please go to\n			the <a href=\"/contact\">contact</a> page and send us a message.\n		</p>\n	</div>\n</div>\n";};

this["app"]["templates"]["contact-email"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<b>From:</b> ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " <<a href=\"mailto:";
  foundHelper = helpers.email;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.email;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>><br />\n<b>Company:</b> ";
  foundHelper = helpers.company;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.company; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "<br />\n<br />\n<p>\n	";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n</p>\n\n";
  return buffer;};