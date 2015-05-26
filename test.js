'use strict'

var Lab   = require('lab')
var Code  = require('code')

var lab = module.exports.lab = Lab.script()

var describe  = lab.describe
var it        = lab.it
var expect    = Code.expect

var getPropertyValue = require('./')

describe('get property value', function() {

  it('invalid js object', function(done) {
    expect(getPropertyValue('object')).to.equal('object')
    done()
  })

  it('a valid js object but a bad path', function(done) {
    var obj = {a: 1}
    var val = getPropertyValue(obj)
    expect(val).to.be.an.object
    expect(val.a).to.equal(obj.a)
    done()
  })

  it('a valid js object with a valid path', function(done) {
    var obj = {a: {b: 1}, c: {d: {f: 'hello'}}}
    var fValue = getPropertyValue(obj, 'c.d.f')
    expect(fValue).to.equal('hello')
    done()
  })

  it('return an object', function(done) {
    var obj = {a: {b: 1}}
    var val = getPropertyValue(obj, 'a')
    expect(val).to.be.an.object
    expect(val.b).to.equal(obj.a.b)
    done()
  })

  it('property don\'t exist shoudl return undefined', function(done) {
    var obj = {a: {b: 1}, c: {d: {f: 'hello'}}}
    var fValue = getPropertyValue(obj, 'c.d.g')
    expect(fValue).to.be.an.undefined
    done()
  })
})