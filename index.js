!function() {

	module.exports                              = require('./lib/RelatedError');
    module.exports.DuplicateKeyError            = require('./lib/DuplicateKeyError');
    module.exports.InvalidCredentialsError      = require('./lib/InvalidCredentialsError');
    module.exports.FailedToConnectError         = require('./lib/FailedToConnectError');


}();
