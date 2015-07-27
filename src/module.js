'use strict';

var spawn = require('child_process').spawn;

module.exports.spawn = function () {
    return spawn('java', [
        '-Djava.library.path=../lib/dynamodb_local_2015-04-27_1.0/DynamoDBLocal_lib',
        '-jar',
        '../lib/dynamodb_local_2015-04-27_1.0/DynamoDBLocal.jar',
        '-inMemory'
    ], {
        cwd: __dirname
    });
};