"use strict"

var fs = require('fs')
var util = require('util')
var path = require('path')
var assert = require('assert')

process.on('uncaughtException', require('workshop-assertion-message'));

function inspect(obj) {
  return util.inspect(obj, {colors: true, depth: 30})
}

var target = path.resolve(process.cwd(), 'node_modules/once')
var targetPackage = path.resolve(process.cwd(), 'package.json')

assert.ok(fs.existsSync(targetPackage), 'Where is your package.json?')

var pkg = require(targetPackage)

assert.ok(pkg.dependencies, 'package.json needs dependencies: ' + inspect(pkg))
assert.ok(pkg.dependencies['once'], 'package.json does not have the once dependency: ' + inspect(pkg))
assert.ok(fs.existsSync(target), 'The once package must actually be installed!')
