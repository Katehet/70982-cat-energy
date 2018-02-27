var menuButton = document.querySelector(".main-menu__button");
var jsButton = document.querySelector(".no-js-button");
var menu = document.querySelector(".main-menu__list");
var menuWrapper = document.querySelector(".main-menu");
var menuJS = document.querySelector(".no-js-menu");

menuButton.addEventListener("click", function () {
  menuWrapper.classList.toggle("main-menu--opened");
  menu.classList.toggle("mobile-menu");
});

menuJS.classList.remove("no-js-menu");
jsButton.classList.remove("no-js-button");

// интерактивная карта
//Yandex version
ymaps.ready(init);

function init(){

    var myMap;

    myMap = new ymaps.Map('map', {
        center: (screen.width < 1300) ? ([59.93877121663107, 30.323274149999975]) : ([59.939075, 30.31965]),
        zoom: 17,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add("zoomControl", {
        position: {top: 100, right: 25}
    });

    var myPlacemark = new  ymaps.Placemark([59.93877121663107, 30.323274149999975] , {},
        {
          iconLayout: 'default#image',
          iconImageHref: '/img/map/map-pin.png',
          iconImageSize: (screen.width > 767) ? [124, 106] : [62, 53],
          iconImageOffset: (screen.width > 767) ? [-62, -83] : [-31, -27.5]
        });
        myMap.geoObjects.add(myPlacemark);

}
