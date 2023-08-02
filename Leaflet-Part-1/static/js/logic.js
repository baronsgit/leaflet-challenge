const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

// load data
function testdata() {
    d3.json(url).then(function(data) {
        console.log(data.features)
    });
}

function init() {
    // testdata();
    plotEarthquakes();
}

function plotEarthquakes() {
    // get the data
    features = [];

    d3.json(url).then(function(data) {
        var itms = data.features;
        itms.forEach(x => {
            // console.log(x);
            features.push(x);
        });
    });

    // console.log(features);
    console.log(features[0].geometry.coordinates[0]);

    // initialize the map
    // var map = L.map('map').setView([51.505, -0.09], 13);
    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     attribution: '© OpenStreetMap'
    // }).addTo(map);

    // var map = L.map('map').setView([38.7858315, -122.739502], 5);

    // // Add the tile layer (you can choose different map styles by changing the URL)
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // features.forEach(function(earthquake) {
    //     var lon = earthquake.geometry.coordinates[0];
    //     var lat = earthquake.geometry.coordinates[1];
    //     var loc = earthquake.properties.place;

    //     console.log(lat + "," + lon);

    //     // L.marker([lat, lon])
    //     //     .addTo(map)
    //     //     .bindPopup("Earthquake Location: " + loc)
    //     //     .openPopup();
    // });
}

init();

/* Leaflet examples
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);


var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
*/
