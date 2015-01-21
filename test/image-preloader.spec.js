define(['image-preloader'], function(imagePreloader) {

	'use strict';

	describe("loadImage", function() {
		
		it("should equal a function", function() {
			expect(imagePreloader.loadImage).toEqual(jasmine.any(Function));
		});

	});

	describe("loadImages", function() {

		var image;

		it("should be a Function", function() {
			expect(imagePreloader.loadImages).toEqual(jasmine.any(Function));
		});

		it("should load a single image", function(done) {

			imagePreloader.loadImages('http://placekitten.com/g/200/300').then(function(loadedImages) {
				expect(loadedImages).toEqual(['http://placekitten.com/g/200/300']);
				done();
			});

		});

		it("should load multiple images", function() {
			imagePreloader.loadImages('http://placekitten.com/g/200/300', 'http://placekitten.com/g/400/500').then(function(loadImages) {
				expect(loadImages).toEqual(['http://placekitten.com/g/200/300', 'http://placekitten.com/g/400/500']);
			});
		});

	});

	describe("loadImage", function() {
		
		it("should be a function", function() {
			expect(imagePreloader.loadImage).toEqual(jasmine.any(Function));
		});

		it("should load a single image", function(done) {

			imagePreloader.loadImage('http://placekitten.com/g/200/300').then(function(src) {
				expect(src).toEqual('http://placekitten.com/g/200/300');
				done();
			});

		});

		it("should reject", function(done) {
			var reject = jasmine.createSpy('reject').and.callFake(done);
			var resolve = jasmine.createSpy('resolve').and.callFake(done);
			imagePreloader.loadImage('https://foo.bar.bin.baz.com/200/300').then(function() {
				resolve();
				done();
				expect(resolve).not.toHaveBeenCalled();
			}, function() {
				reject();
				done();
				expect(reject).toHaveBeenCalled();
			});
			
		});

	});

});