;$(document).ready(function() {
		ymaps.ready(function(){
			
	    var myMap = new ymaps.Map("my_map", {
	        center: [51.64366779, 38.95649378],
	        zoom: 15
	    });
	    var myPlacemark = new ymaps.Placemark([51.64409499, 38.96516268], {}, {
    	iconLayout: 'default#image',
    	iconImageHref: 'icons/placeholder@2x.png',
    	iconImageSize: [38, 54]
	});
		myMap.geoObjects.add(myPlacemark);
		myMap.behaviors.disable(['scrollZoom']);
	});
});


