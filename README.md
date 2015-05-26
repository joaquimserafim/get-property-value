# get-property-value

get the property value from a nested object by using a dot path `a.b.c`

<a href="https://nodei.co/npm/get-property-value/"><img src="https://nodei.co/npm/get-property-value.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/get-property-value)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/get-property-value/blob/master/LICENSE)

## API
`var getPropValue = require('get-property-value')`



## Usage

```js

var getPropValue = require('get-property-value')

var obj = {a: {b: 1}, c: {d: {f: 'hello'}}}

var fValue = getPropertyValue(obj, 'c.d.f')
console.log(fValue)// hello
var aValue = getPropertyValue(obj, 'a')
console.log(aValue)// {b: 1}

var propNotExist = getPropertyValue(obj, 'c.d.g') 
console.log(propNoExist)// undefined

var badObject = getPropertyValue('hello', 'c.d.g') 
console.log(badObject)// hello

var badPath = getPropertyValue({a: 1}) 
console.log(badPath)// {a: 1}

```


## Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
