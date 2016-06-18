/* eslint-env mocha */
var oboy = require('../../')

/* inception - testing itself with itself */
oboy((expect, sinon, proxyquire) => {
  describe('expect', function () {
    it('exists', function (done) {
      expect(expect).to.be.a.function
      done()
    })
  })

  describe('sinon', function () {
    it('exists', function (done) {
      expect(sinon).to.be.an.object
      done()
    })
  })

  describe('proxyquire', function () {
    it('exists', function (done) {
      expect(proxyquire).to.be.a.function
      done()
    })
  })

  describe('arguments', function () {
    it('can handle different argument order', function (done) {
      var _expect = expect
      var _sinon = sinon
      oboy(function (sinon, expect) {
        _expect(expect).to.equal(_expect)
        _expect(sinon).to.equal(_sinon)
        done()
      })
    })

    xit('can handle load mocha functions', function (done) {
      var _expect = expect
      var _sinon = sinon
      oboy(function (sinon, expect, it, describe) {
        describe('mocha inline', function (){
          it('mocha', function (){
            done()
          })
        })
      })
    })
  })
})
