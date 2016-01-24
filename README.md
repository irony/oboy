```
________ ___.                 ._.
\_____  \\_ |__   ____ ___.__.| |
 /   |   \| __ \ /  _ <   |  || |
/    |    \ \_\ (  <_> )___  | \|
\_______  /___  /\____// ____| __
        \/    \/       \/      \/
```

Get Mocha, Chai, Proxyquire and Sinon-as-promised in one package!
===========================================

### Why?
It took too much boilerplate to include and configure my favorite assert libs together for every project. Now you just need one: Oboy. It is highly opinionated to the tools I use but if you have chosen the same, go ahead and use this.

### To use

    npm install oboy --saveDev

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

### What is Oboy?
Oboy is a chocolate drink in Sweden :)


### License: MIT

