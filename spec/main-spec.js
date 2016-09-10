'use strict';

const hello = require('../src/main');

describe('hello',()=>{

   it('should return hello',()=>{

       expect(hello()).toEqual('hello world');
   })

});