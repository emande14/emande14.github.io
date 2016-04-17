
var mymap = L.map('mapid').setView([44.9537, -93.0900], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: emande14.fe985a38
    accessToken: pk.eyJ1IjoiZW1hbmRlMTQiLCJhIjoiM3pjYXRxNCJ9.rrDLlZxSn5ivm_VqPwf0uw
}).addTo(mymap);
