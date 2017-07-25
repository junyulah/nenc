'use strict';

var sys_module, sys_runProgram, addMetaMethod;

// require system library
var nencJsInterpreter = require('nenc-js-interpreter');
    
!(function(module) {
    try {
        var _ = nencJsInterpreter;
        sys_module = _.sys_module;
        sys_runProgram = _.sys_runProgram;
        addMetaMethod = _.addMetaMethod;
    } catch(err) {
        if(typeof console !== 'undefined') {
            console.log('error happend when try to import system code.');
        }
        throw err;
    }
})();

try {
// require libraries
{: join(concatLibraries(libraries, "require('${library}')(addMetaMethod);"), "") :}
} catch(err) {
    console.log('error happened when try to import library code.');
    throw err;
}

{: custom_code :}

(function() {
{: join(concatModuleSources(moduleSources, "sys_module('${filePath}', ${code});"), "") :}

    var __program__result__ = sys_runProgram("{: indexPath :}");

    // exports result
    if(typeof module === 'object' && module) {
        module.exports = __program__result__;
    }
    return __program__result__;
})();
