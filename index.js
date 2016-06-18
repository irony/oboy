/* eslint-env mocha */

var proxyquire = require('proxyquire')
var sinon = require('sinon')
var mocha = require('mocha')
require('sinon-as-promised')
var expect = require('chai').expect
var should = require('chai').should
var sinonChai = require('sinon-chai')
require('chai').use(sinonChai)
var annotate = require('./lib/annotate')

module.exports = function (callback) {
  var options = {sinon, expect, should, sinonChai, proxyquire, it: mocha.it, describe: mocha.describe}
  var _arguments = annotate(callback)
  callback.apply(this, _arguments.map(key => options[key]))
}
