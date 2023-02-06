'use strict';

const testmain = require('..');
const assert = require('assert').strict;

assert.strictEqual(testmain(), 'Hello from testmain');
console.info("testmain tests passed");
