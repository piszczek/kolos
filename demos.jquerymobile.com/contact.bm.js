var BMApp = BMApp || {};

BMApp.contact = (function($) {

    var init;

    init = function() {

            // Initialize map
            new GMaps({
                div: '#map',
                lat: 50.0685649,
                lng: 19.9551201,
                zoom: 16,
                disableDefaultUI: false,
                scrollwheel: false
            }).addMarkers([
                {
                    lat: 50.0685649,
                    lng: 19.9551201,
                    title: 'Znajdź nas',
                    infoWindow: {content: '<strong>Graniczna 131, 32-087 Bibice<br/> Centrum stomatologii</strong>'},
                    animation: google.maps.Animation.DROP
                }
            ]);
        };

    return {
        init: init
    };
}(jQuery));
