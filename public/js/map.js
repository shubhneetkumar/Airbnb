mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style:'mapbox://styles/mapbox/streets-v12',
    center: [77.2090, 28.6139], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 5 // starting zoom
});

const marker1 = new mapboxgl.Marker({color: "red"})
.setLngLat([77.2090,28.6139])
.setPopup(new mapboxgl.Popup({offset:25}).setHTML("<h6>Exact location provided after booking</h6>"))
.addTo(map);
