
'use strict';

var loadImage = function(src) {
	
	return new Promise(function(res, rej) {

		var image = new Image();

		image.onload = res.bind(this, src);
		image.onerror = rej.bind(this, src);

		image.src = src;

	});

};

var loadImages = function(images) {

	images = Array.prototype.map.call(arguments, function(src) {
		return loadImage(src);
	});

	return Promise.all(images);

};


export  { loadImage, loadImages };
