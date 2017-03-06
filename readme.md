# has-setter

A [Node.js](https://nodejs.org/) module that checks if an object has a property with a defined setter function.

## Installation

```bash
npm install has-setter --save
```

The module exposes a single function.

## Usage

```javascript
const hasSetter = require('has-setter')

class Test {
  set data (value) {}
}

hasSetter(Test.prototype, 'data') // true

const test = new Test()

hasSetter(test, 'data') // true
```
