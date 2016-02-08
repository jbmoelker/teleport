(function(){
    'use strict';

    document.getElementById('destinationForm')
        .addEventListener('submit', findDestination);

    function findDestination(event) {
        event.preventDefault();
        var form = event.target;
        var address = form.address.value;

        findAddress(address)
            .then(function(location){
                form.location.value = JSON.stringify(location.toJSON());
            })
            .catch(function(err){
                form.location.value = err;
            });
    }

    /**
     * Find location of a give address.
     * @param {String} address
     * @returns {Promise} resolves with location as {google.maps.LatLng}
     *  see https://developers.google.com/maps/documentation/javascript/3.exp/reference#LatLng
     */
    function findAddress(address) {
        return new Promise(function(resolve, reject) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({address: address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    resolve(results[0].geometry.location);
                } else {
                    reject('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
    }

    /**
     * @param {google.maps.LatLng} location
     */
    function teleportTo(location) {

    }

}());