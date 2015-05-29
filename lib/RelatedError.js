!function() {

	var   Class 		= require('ee-class')
		, log 			= require('ee-log');



	module.exports = new Class({
        inherits: Error

		, code: 'unknown'
        
        , message: ''


        , stack: {
            get: function() { return this.err.stack; }
        }


        , init: function init(err) {
            init.super.call(this);
            this.message = err.message;

            this.err = err;
        }
	});
}();
