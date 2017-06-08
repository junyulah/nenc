module.exports = "'use strict';\n\n// support to es3\nvar sys_void, sys_pair, \n    sys_application, sys_statements, sys_exp, sys_variable, sys_abstraction,\n    sys_runProgram, sys_letBinding,\n    sys_data, sys_object, sys_array, sys_string,\n    addMetaMethod;\n\n// require system library\nvar nencJsInterpreter = require('nenc-js-interpreter');\n    \n!(function(module) {\n    try {\n        var _ = nencJsInterpreter;\n        sys_void = _.sys_void; \n        sys_pair = _.sys_pair; \n\n        sys_letBinding = _.sys_letBinding;\n        sys_statements = _.sys_statements;\n        sys_exp = _.sys_exp;\n        sys_variable = _.sys_variable; \n        sys_abstraction = _.sys_abstraction;\n        sys_application = _.sys_application;\n\n        sys_data = _.sys_data;\n        sys_object = _.sys_object; \n        sys_array = _.sys_array;\n        sys_string = _.sys_string;\n\n        sys_runProgram = _.sys_runProgram;\n        addMetaMethod = _.addMetaMethod;\n    }\n    catch(err) {\n        if(typeof console !== 'undefined') {\n            console.log('error happend when try to import system code.');\n        }\n        throw err;\n    }\n})();\n\ntry {\n<%= libraryImportCode %>\n} catch(err) {\n    console.log('error happened when try to import library code.');\n    throw err;\n}\n\n<%= custom_code %>\n\n(function() {\n    var __program__result__ = sys_runProgram(<%= middle_code %>);\n    // exports result\n    if(typeof module === 'object' && module) {\n        module.exports = __program__result__;\n    }\n    return __program__result__;\n})();\n"