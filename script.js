mapboxgl.accessToken = 'pk.eyJ1IjoiZGViYmlleXVlbiIsImEiOiJjbDA1eWZ5b2MwdThnM2pueThhcHY0cnVrIn0.KQJrp1gFUIcOeIGqWNfcmA';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/debbieyuen/clfrutxu5002n01qog6wey0v4', // style URL
        center: [-118.32998999051183, 33.92142158687523], // starting center in [lng, lat]
        zoom: 15 // starting zoom
    });

    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    );
    
    const container = document.querySelector('.container');
    var gridWidth = 172;
    var gridHeight = 100;
    Draggable.create(".car", {
        type: "y",
        edgeResistance: 0.65,
        bounds: ".container",
        lockAxis: true,
        inertia: true,
        // snap: {
        //     x: function(endValue) {
        //         return Math.round(endValue / gridWidth) * gridWidth;
        //     },
        //     y: function(endValue) {
        //         return Math.round(endValue / gridHeight) * gridHeight;
        //     }
        // }
    });

    Draggable.create(".rearcamera")
