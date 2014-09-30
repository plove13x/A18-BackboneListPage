/* global describe, it */

(function () {
    'use strict';

	describe("Test these tests", function () {

		beforeEach(function() {
   			this.smith = "cool";
    	});

		it("should give me a green check mark.", function(){	
			expect(this.smith).to.equal("cool");
		});

	});


	describe("Create basic elements", function () {

	// beforeEach(function() {
 //   		this.view = new ListView();
 //    });

		it("should add itself to the DOM", function () {
  			// this.view = new ListView();
  			// this.view.render();
  			expect($('ul.bookList').length).to.equal(1);
		});

		it("should render a list of items", function(){
		// expect a # of lis
			expect($('ul.bookList').html().match('Ball Four')).to.be.ok;
		})


	});   

	describe("Filters books matching input value", function() {

		it("should recognize text put in the input box as a value even without even hitting enter ", function () {
			expect($('ul.bookList').length).to.equal(1);
		})

	});






})();	/*END */









