//просмотр ширины и высоты браузера   
    //  win_w2 = $(window).width();
    // win_h2 = $(window).height();
    // alert(win_w2);
    // alert(win_h2);


/*Скрипт для меню*/
$(window).scroll(function(){
    var r=$(document).scrollTop();
        e=50;
    if(r>e){
        $(".main-nav").addClass("locked");
    }
    else{
        $(".main-nav").removeClass("locked");
        $(".main-nav").removeAttr("style");
    };
});
/**/


$(function(){

	/*Макска для телефона*/
	//$("#phone").mask("+7 (999) 999-99-99",{placeholder:" "});

	/*Скрипт для модальных окон*/
	$('.popap_box').click(function() {
		$('#modalbox_' + $(this).data('body')).arcticmodal();
	});


	/* яндекс карта*/
    /*ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [51.1362,71.4346],
            zoom: 17,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Название'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/place-arrow.png',
            // Размеры метки.
            iconImageSize: [100, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [40, -40]
            
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
    });*/
    /**/
})