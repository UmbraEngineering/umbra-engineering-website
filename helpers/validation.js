
var emailRegex, urlRegex;  // See bottom of file for definitions

// ------------------------------------------------------------------
//  Form validator

var Validator = exports.Validator = function(def) {
	this.def = def;
};

Validator.prototype.validate = function(data) {
	var failures = {_total: 0};
	Object.keys(this.def).forEach(function(field) {
		failures[field] = this.def[field](data[field]);
		failures._total += failures[field].length;
	}.bind(this));
};

// ------------------------------------------------------------------
//  Validator factories

exports.textField = function(reqs) {
	return function(value) {
		return exports.validateTextField(value, reqs);
	};
};

exports.numberField = function(reqs) {
	return function(value) {
		return exports.validateNumberField(value, reqs);
	};
};

exports.radioField = function(reqs) {
	return function(value) {
		return exports.validateRadioField(value, reqs);
	};
};

// ------------------------------------------------------------------
//  Value validators

/**
 * @param   string    the value to validate
 * @param   object    validation requirements
 *     { type: string,
 *       required: boolean,
 *       minLength: number,
 *       maxLength: number,
 *       regex: regex }
 * @return  array
 */
exports.validateTextField = function(value, reqs) {
	var failures = [ ];
	if (! value) {
		if (reqs.required) {
			failures.push('required');
		} else {
			return failures;
		}
	}
	if (reqs.minLength && value.length < reqs.minLength) {
		failures.push('minLength');
	}
	if (reqs.maxLength && value.length > reqs.maxLength) {
		failures.push('maxLength');
	}
	if (reqs.regex && ! reqs.regex.test(value)) {
		failures.push('regex');
	}
	if (reqs.type) {
		if (typeof exports.types[req.type] !== 'function') {
			throw new Error('Validation type "' + req.type + '" is not defined.');
		}
		exports.types[req.type](value);
	}
	return failures;
};

/**
 * @param   number    the value to validate
 * @param   object    validation requirements
 *     { type: string,
 *       required: boolean,
 *       min: number,
 *       max: number,
 *       int: boolean }
 * @return  array
 */
exports.validateNumberField = function(value, reqs) {
	var failures = [ ];
	var empty = isEmpty(value);
	if (reqs.required || ! empty) {
		value = Number(value);
		if (reqs.required && empty) {
			failures.push('required');
		}
		if (reqs.min && value < reqs.min) {
			failures.push('min');
		}
		if (reqs.max && value > reqs.max) {
			failures.push('max');
		}
		if (reqs.int && ! isInt(value)) {
			failures.push('int');
		}
		if (reqs.type) {
			if (typeof exports.types[req.type] !== 'function') {
				throw new Error('Validation type "' + req.type + '" is not defined.');
			}
			exports.types[req.type](value);
		}
	}
	return failures;
};

/**
 * @param   mixed     the value to validate
 * @param   object    validation requirements
 *     { type: string,
 *       required: boolean,
 *       values: array,
 *       otherValue: string,
 *       otherValidation: function }
 * @return  array
 */

//required: true,
//values: ['request-quote', 'request-info'],
//otherValue: 'other',
//otherValidation: validation.textField({
//	required: true,
//	minLength: 2,
//	maxLength: 50
//})

exports.validateRadioField = function(value, reqs) {
	var failures = [ ];
	
	var other;
	if (Array.isArray(value)) {
		other = value[1];
		value = value[0];
	}
	
	
	
	return failures;
};

/**
 * Validation functions for specific types
 */
exports.types = {
	email: function(value) {
		return emailRegex.test(value);
	},
	url: function(value) {
		return urlRegex.test(value);
	}
};

// ------------------------------------------------------------------

function isInt(num) {
	return (num === Math.round(num));
}

function isEmpty(value) {
	if (value == null || value === false || value === '');
}

// regular expression by Scott Gonzalez:
// http://projects.scottsplayground.com/email_address_validation/
emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;

// regular expression by Scott Gonzalez:
// http://projects.scottsplayground.com/iri/
urlRegex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

