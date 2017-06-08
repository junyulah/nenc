'use strict';

let {
    grammerPath,
    LR1TablePath,
    pfcTranslatorJsonPath,
    jsOptTranslatorJsonPath,
    cOptTranslatorJsonPath,
    jsJoinTplPath,
    cSystemCodePath,
    cJoinTplPath
} = require('./grammerResource');

let {
    generateLR1Table,
    jsonToJsModule,
    textToJsModule
} = require('./util');

let path = require('path');

let grammerJsDir = path.join(__dirname, '../grammer-host/grammer-js');

//
const LR1TableJsPath = path.join(grammerJsDir, 'LR1Table.js');

const pfcTranslatorJsPath = path.join(grammerJsDir, 'translator/pfc.js');

// opt translator
const jsOptTranslatorJsPath = path.join(grammerJsDir, 'library/js/optTranslator.js');
const cOptTranslatorJsPath = path.join(grammerJsDir, 'library/c/optTranslator.js');

// system library
const jsTargetJsJoinTplPath = path.join(grammerJsDir, 'library/js/join.js.tpl.js');

const jsTargetCSystemCodePath = path.join(grammerJsDir, 'library/c/system.c.js');
const jsTargetCJoinTplPath = path.join(grammerJsDir, 'library/c/join.c.tpl.js');

let systemLibJsModule = () => {
    return Promise.all([
        textToJsModule(jsJoinTplPath, jsTargetJsJoinTplPath),
        textToJsModule(cSystemCodePath, jsTargetCSystemCodePath),
        textToJsModule(cJoinTplPath, jsTargetCJoinTplPath)
    ]);
};

module.exports = () => {
    return Promise.all([
        generateLR1Table(grammerPath, LR1TablePath, LR1TableJsPath),

        jsonToJsModule(pfcTranslatorJsonPath, pfcTranslatorJsPath),

        systemLibJsModule(),

        jsonToJsModule(jsOptTranslatorJsonPath, jsOptTranslatorJsPath),
        jsonToJsModule(cOptTranslatorJsonPath, cOptTranslatorJsPath)
    ]);
};
