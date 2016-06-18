Get Mocha, Chai, Proxyquire and Sinon-as-promised in one package!
===========================================
Skip the boilerplate, just one line per test is required 

    var oboy = require('oboy')
    oboy((expect, proxyquire) => {
      ...


```
________ ___.                 ._.
\_____  \\_ |__   ____ ___.__.| |
 /   |   \| __ \ /  _ <   |  || |
/    |    \ \_\ (  <_> )___  | \|
\_______  /___  /\____// ____| __
        \/    \/       \/      \/
```


### Why?
It took too much boilerplate to include and configure my favorite assert libs together for every project. Now I just need one: Oboy. If you also use chai, sinon-as-promised, mocha and proxyquire - just install Oboy instead, batteries included.

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

### Dynamic bindings

    oboy(should, proxyquire) 

works just as well as:

    oboy(proxyquire, should, sinon) 



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

