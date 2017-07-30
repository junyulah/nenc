'use strict';

let {
    equalJsApp
} = require('../util');
let path = require('path');
let fs = require('fs');
let promisify = require('es6-promisify');

let readFile = promisify(fs.readFile);
let testDataDir = path.join(__dirname, '../../testData');

let testData = {
    'base': path.join(testDataDir, 'base.json'),
    'json': path.join(testDataDir, 'json.json'),
    'abstraction': path.join(testDataDir, 'abstraction.json'),
    'codeBlock': path.join(testDataDir, 'codeBlock.json'),
    'condition': path.join(testDataDir, 'condition.json'),
    'literal': path.join(testDataDir, 'literal.json'),
    'letBinding': path.join(testDataDir, 'letBinding.json'),
    'guard': path.join(testDataDir, 'guard.json')
};

for (let name in testData) {
    readFile(testData[name], 'utf-8').then((str) => {
        let part = JSON.parse(str);
        describe(`js: ${name}`, () => {
            let index = 0;
            for (let code in part) {
                let target = part[code];
                index++;
                it(`${index}. ${code}`, () => {
                    equalJsApp(code, target);
                });
            }
        });
    });
}
