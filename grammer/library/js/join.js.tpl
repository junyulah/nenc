'use strict';

// support to es3
var sys_void, sys_pair, 
    sys_statements, sys_exp, sys_variable, sys_abstraction, sys_application,
    sys_runProgram,
    sys_data, sys_object, sys_array, sys_string,
    addMetaMethod;

// require system library
var nencJsInterpreter = require('nenc-js-interpreter');
    
!(function(module) {
    try {
        var _ = nencJsInterpreter;
        sys_void = _.sys_void; 
        sys_pair = _.sys_pair; 

        sys_statements = _.sys_statements;
        sys_exp = _.sys_exp;
        sys_variable = _.sys_variable; 
        sys_abstraction = _.sys_abstraction;
        sys_application = _.sys_application;

        sys_data = _.sys_data;
        sys_object = _.sys_object; 
        sys_array = _.sys_array;
        sys_string = _.sys_string;

        sys_runProgram = _.sys_runProgram;
        addMetaMethod = _.addMetaMethod;
    }
    catch(err) {
        if(typeof console !== 'undefined') {
            console.log('error happend when try to import system code.');
        }
        throw err;
    }
})();

try {
<%= libraryImportCode %>
} catch(err) {
    console.log('error happened when try to import library code.');
    throw err;
}

<%= custom_code %>

(function() {
    var __program__result__ = sys_runProgram(<%= middle_code %>);
    // exports result
    if(typeof module === 'object' && module) {
        module.exports = __program__result__;
    }
    return __program__result__;
})();
