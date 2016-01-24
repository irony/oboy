/* eslint-env mocha */
var oboy = require('../../')

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
})
