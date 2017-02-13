/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const getPropValue = require('.')

test('should return the given argument for invalid plain js objects',
  (assert) => {

    assert.deepEqual(getPropValue(), undefined, 'with undefined')
    assert.deepEqual(getPropValue(null), null, 'with null')
    assert.deepEqual(getPropValue([]), [], 'with an array')
    assert.deepEqual(getPropValue('object'), 'object', 'with a string')
    assert.deepEqual(getPropValue(1), 1, 'with a number')

    assert.end()
  }
)

test('should return the given js object for an invalid path',
  (assert) => {

    var obj = {a: {b: 1}}

    assert.deepEqual(getPropValue(obj), obj, 'return the given object')

    assert.end()
  }
)

test('should return the property value for a given js object and a valid path',
  (assert) => {

    var obj = {a: {b: 1}}

    assert
      .deepEqual(
        getPropValue(obj, 'a'),
        {b: 1},
        'returns the property value {a: 1}'
      )

    assert
      .deepEqual(getPropValue(obj, 'a.b'), 1, 'returns the property value 1')

    assert.end()
  }
)

test('should work with nested objects', (assert) => {

  var obj = {a: {b: {c: {d: 1}}}}

  assert
    .deepEqual(
      getPropValue(obj, 'a.b.c.d'),
      1,
      'returns the property value 1'
    )

  assert.end()
})

test('should return undefined for a path that doesn\'t exists',
  (assert) => {

    var obj = {a: {b: 1}}

    assert
      .deepEqual(
        getPropValue(obj, 'a.c'),
        undefined,
        'no property should return undefined'
      )

    assert
      .deepEqual(
        getPropValue(obj, 'a.b.c.d'),
        undefined,
        'no property should return undefined'
      )

    assert.end()
  }
)

test('should work with an Error object',
  (assert) => {

    var error = new Error('hello world')
    error.someThing = {status: 'hey'}

    assert
      .deepEqual(
        getPropValue(error, 'message'),
        'hello world',
        'returns the error message'
      )

    assert
      .deepEqual(
        getPropValue(error, 'someThing.status'),
        'hey',
        'returns the property value hey'
      )

    assert.end()
  }
)

