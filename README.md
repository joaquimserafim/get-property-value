# get-property-value

get the property value from a nested object by using a dot path `a.b.c`

<a href="https://nodei.co/npm/get-property-value/"><img src="https://nodei.co/npm/get-property-value.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/get-property-value)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/get-property-value/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/fn-spy/blob/master/package.json#L50)

### API
`var getPropValue = require('get-property-value')`

`getPropValue({}, 'path')`


### Usage

```js

var getPropValue = require('get-property-value')

var obj = {a: {b: 1}, c: {d: {f: 'hello'}}}

var fValue = getPropertyValue(obj, 'c.d.f')// hello
var aValue = getPropertyValue(obj, 'a')// {b: 1}

var propNotExist = getPropertyValue(obj, 'c.d.g') // undefined

var badObject = getPropertyValue('hello', 'c.d.g') // hello

var badPath = getPropertyValue({a: 1})// {a: 1}

```


#### ISC License (ISC)