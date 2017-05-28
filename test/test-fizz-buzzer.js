const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzz', function(){
	it("should replace numbers divisible by 3 with fizz", function (){
		const normalCases = [[3, "fizz"], [9, "fizz"], [27, "fizz"]]
	    normalCases.forEach(function(input) {
	      const answer = fizzBuzz(input[0]);
	      answer.should.equal(input[1]);
	    });
	})
	it("should replace numbers divisible by 5 with buzz", function (){
		const normalCases = [[5, "buzz"], [10, "buzz"], [25, "buzz"]]
	    normalCases.forEach(function(input) {
	      const answer = fizzBuzz(input[0]);
	      answer.should.equal(input[1]);
	    });
	})
	it("should replace numbers divisible by 15 with fizz-buzz", function (){
		const normalCases = [[15, "fizz-buzz"], [30, "fizz-buzz"], [45, "fizz-buzz"]]
	    normalCases.forEach(function(input) {
	      const answer = fizzBuzz(input[0]);
	      answer.should.equal(input[1]);
	    });
	})
	it("should raise errors if arg is not number", function(){
		const badInputs = ["a", false, [], "30"];
		badInputs.forEach(function(item){
	      (function() {
	          fizzBuzz(item)
	      }).should.throw(Error);
		})
	})
})