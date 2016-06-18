/* eslint-env mocha */
var oboy = require('../../')
var annotate = require('../../lib/annotate')

/* inception - testing itself with itself */
oboy((expect, sinon) => {
  describe('annotate', function () {
    it('can extract function names', function () {
      var fun = function (a, b, c) {}
      var _arguments = annotate(fun)
      expect(_arguments).to.eql(['a', 'b', 'c'])
    })
  })
})
