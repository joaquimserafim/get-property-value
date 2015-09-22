'use strict'

var Lab   = require('lab')
var Code  = require('code')

var lab = module.exports.lab = Lab.script()

var describe  = lab.describe
var it        = lab.it
var expect    = Code.expect

var get = require('./')

describe('get property value', function() {
  it('invalid js object', function(done) {
    expect(get('object')).to.equal('object')
    done()
  })

  it('a valid js object but a bad path', function(done) {
    var obj = {a: 1}
    var val = get(obj)
    expect(val).to.be.an.object()
    expect(val.a).to.equal(obj.a)
    done()
  })

  it('a valid js object with a valid path', function(done) {
    var obj = {a: {b: 1}, c: {d: {f: 'hello'}}}
    var fValue = get(obj, 'c.d.f')
    expect(fValue).to.equal('hello')
    done()
  })

  it('return an object', function(done) {
    var obj = {a: {b: 1}}
    var val = get(obj, 'a')
    expect(val).to.be.an.object()
    expect(val.b).to.equal(obj.a.b)
    done()
  })

  it('property don\'t exist should return undefined', function(done) {
    var obj = {a: {b: 1}, c: {d: {f: 'hello'}}}
    var fValue = get(obj, 'c.d.g')
    expect(fValue).to.be.an.undefined()
    done()
  })

  it('nested property don\'t exist should return undefined', function(done) {
    var obj = {a: {b: 1}, c: {d: {f: 'hello'}}}
    var fValue = get(obj, 'c.t.f')
    expect(fValue).to.be.an.undefined()
    done()
  })

  it('should get the property nested from an Error object should work',
  function(done) {
    var error = new Error('hello world')
    error.someThing = {status: 'hey'}
    var status = get(error, 'someThing.status')
    expect(status).to.equal('hey')
    done()
  })
})
