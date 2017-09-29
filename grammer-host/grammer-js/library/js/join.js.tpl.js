module.exports = "'use strict';\n\nvar sys_module, sys_runProgram, addMetaMethod, Sys_Statements, Sys_Application, Sys_Abstraction, Sys_Variable, Sys_Array, nencModuleFactory;\n\n// require system library\nvar nencJsInterpreter = require('nenc-js-interpreter');\n    \n!(function(module) {\n    try {\n        var _ = nencJsInterpreter;\n        sys_module = _.sys_module;\n        sys_runProgram = _.sys_runProgram;\n        addMetaMethod = _.addMetaMethod;\n\n        Sys_Application = _.Sys_Application;\n        Sys_Abstraction = _.Sys_Abstraction;\n        Sys_Variable = _.Sys_Variable;\n        Sys_Array = _.Sys_Array;\n        nencModuleFactory = new _.NencModuleFactory();\n    } catch(err) {\n        if(typeof console !== 'undefined') {\n            console.log('error happend when try to import system code.');\n        }\n        throw err;\n    }\n})();\n\ntry {\n// require libraries\n{: join(concatLibraries(libraries, \"require('${{library}}')(addMetaMethod);\"), \"\") :}\n} catch(err) {\n    console.log('error happened when try to import library code.');\n    throw err;\n}\n\n{: custom_code :}\n\n(function() {\n// modules\n{: join(concatModuleSources(moduleSources, \"nencModuleFactory.defineModule(${{encodeString(filePath)}}, ${{code}});\"), \"\") :}\n\n    var __program__result__ = nencModuleFactory.importModule(\"{: indexPath :}\");\n\n    // exports result\n    if(typeof module === 'object' && module) {\n        module.exports = __program__result__;\n    }\n    return __program__result__;\n})();\n"