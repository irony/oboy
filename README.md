Get Mocha, Chai, Proxyquire and Sinon-as-promised in one package!
===========================================

```
________ ___.                 ._.
\_____  \\_ |__   ____ ___.__.| |
 /   |   \| __ \ /  _ <   |  || |
/    |    \ \_\ (  <_> )___  | \|
\_______  /___  /\____// ____| __
        \/    \/       \/      \/
```


### Why?
It took too much boilerplate to include and configure my favorite assert libs together for every project. Now you just need one: Oboy. It is highly opinionated to the tools I use but if you have chosen the same, go ahead and use this.

### To use

    npm install --save-dev oboy

### Write your tests:

    var oboy = require('oboy') // this 
    oboy((expect, sinon, proxyquire) => {
      describe('something', _=>{
        it('works', (done) => {
          done()
        })      
      })

      [... more tests]

    })

### Run your tests

Since Mocha is a dependency you can run the tests with the local cli distributed with your oboy app. Just add this line to your package.json
  
    "scripts": {
      "test": "./node_modules/.bin/mocha tests/*"
    }

So to run the tests, just run

    npm test

### What is Oboy?
Oboy is a chocolate drink in Sweden :)


### License: MIT

