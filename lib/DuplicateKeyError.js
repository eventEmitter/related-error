!function() {

    var   Class         = require('ee-class')
        , RelatedError  = require('./RelatedError');

    
    module.exports = new Class({
        inherits: RelatedError

        , code: 'uniqueDuplicateKey'
    });
}();
