/* eslint-env mocha */

var proxyquire = require('proxyquire')
var sinon = require('sinon')
require('sinon-as-promised')
var expect = require('chai').expect
var sinonChai = require('sinon-chai')
require('chai').use(sinonChai)

module.exports = function (callback) {
  callback(expect, sinon, proxyquire)
}
