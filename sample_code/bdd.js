var chai = require('chai');
var expect = chai.expect;
var factorial = require("./funciones.js").factorial;

describe('Pruebas', function(){
  describe('Factorial()', function(){
    it('Debe retornar 1 el valor de entrada es 0', function(){
      // assert.equal(1, factorial(1));
      expect(factorial(0)).to.be.equal(1);
    });
    it('Debe retornar el resultado de una multiplicación sucesiva', function(){
      // assert.equal(120, factorial(5));
      expect(factorial(5)).to.be.equal(120);
    });
  })
})


