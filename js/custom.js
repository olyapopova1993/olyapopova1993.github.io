;$(document).ready(function() {
		ymaps.ready(function(){
	    // Указывается идентификатор HTML-элемента.
	    var myMap = new ymaps.Map("my_map", {
	        center: [51.64523849, 38.95769479],
	        zoom: 13
	    });
	    // var myPlacemark = new ymaps.Placemark([51.64523849, 38.95769479], {
	    // 	balloonContentHeader: '<img src="icons/placeholder@2x.png">'
	    // });
	    var myPlacemark = new ymaps.Placemark([51.64523849, 38.95769479], {}, {
    	iconLayout: 'default#image',
    	// iconImageClipRect: [[0,0], [26, 46]],
    	iconImageHref: 'icons/placeholder@2x.png',
    	iconImageSize: [38, 54]
    	// iconImageOffset: [-15, -27]
});
		myMap.geoObjects.add(myPlacemark);
	});
  // ymaps.ready(init);
  // var myMap;

  // function init(){
  //     myMap = new ymaps.Map ("my_map", {
  //         center: [51.64523849, 38.95769479],
  //         zoom: 13
  //     });

  //     myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl');

  //     myMap.behaviors.disable(['scrollZoom']);


  //     myPlacemark1 = new ymaps.Placemark([51.64523849, 38.95769479], {
  //       balloonContentHeader: '<img src="icons/placeholder.svg" alt="Кликай, не стенсняйся :)" title="Кликай, не стенсняйся :)" class="mc__logo"><span class="mc__home">Штаб Master-CSS</span>',
  //       balloonContentBody: 'Здесь живу я и моя собака - Алиса',
  //       balloonContentFooter: '<span class="mc__foot">каждому по комнате</span>',
  //       hintContent: 'Мой дом'
  //     });

      // myPin.add(myPlacemark1);

      // myMap.geoObjects.add(myPin);
  // }

});


