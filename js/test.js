/*
 * Bootstrap Image Gallery JS Demo 3.0.0
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global window, document, blueimp, $ */

$(function () {
    'use strict';

    // Load demo images from flickr:
    $.ajax({
        url: 'https://api.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.photosets.getPhotos',
            api_key: '7212e47a02983154585e2684a64085c6',
	        photoset_id: '72157639175935955'
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        var imagesContainer = $('#images'),
            baseUrl;

        // Add the demo images as links with thumbnails to the page:
        $.each(result.photoset.photo, function (index, photo) {
            baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            
            var mosaicItemDiv = $('<div>');
            mosaicItemDiv.prop('class', 'mosaicflow__item');
            
            var divContent = $('<img>');
            divContent.prop('src', baseUrl + '_z.jpg');

            mosaicItemDiv.append(divContent);

            mosaicItemDiv.appendTo(imagesContainer);
        });
    });

});
