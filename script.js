// Webcam
const webCamElement = document.getElementById("webCam");
const canvasElement = document.getElementById("canvas");
const webcam = new Webcam(webCamElement, "user", canvasElement);
// webcam.start()

// Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZGViYmlleXVlbiIsImEiOiJjbDA1eWZ5b2MwdThnM2pueThhcHY0cnVrIn0.KQJrp1gFUIcOeIGqWNfcmA';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/debbieyuen/clfrutxu5002n01qog6wey0v4', // style URL
        center: [-118.32998999051183, 33.92142158687523], // starting center in [lng, lat]
        zoom: 15 // starting zoom
    });

    // Create a default marker and add it to the map
    const marker1 = new mapboxgl.Marker({color: 'red'})
        .setLngLat([-118.32998999051183, 33.92142158687523])
        .addTo(map);
    
    // Create a default Marker, colored red, rotated 45 degrees.
    // const marker2 = new mapboxgl.Marker({ color: 'red', rotation: 45})
    //     .setLngLat([-118.32998999051183, 33.92142158687523])
    //     .addTo(map);

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
    // Define variables for draggable if statement
    var directionStart = document.getElementById("directionStart"),
    directionVelocity = document.getElementById("directionVelocity"),
    directionObject = document.getElementById("directionObject"),
    original = document.getElementById("original"),
    logoElement = document.getElementById("logoElement");

    const container = document.querySelector('.container');
    var gridWidth = 172;
    var gridHeight = 100;
    Draggable.create(".car", {
        type: "y",
        edgeResistance: 0.65,
        bounds: ".container",
        lockAxis: true,
        inertia: true,
        onDrag:updateDirections,
        onDrag: function() {
            var video = document.getElementById("blackbackground");
            if(this.getDirection(".car") == "up") {
                console.log(this.target);
                TweenLite.to("#map", 0.5, {scale:1, opacity: 1});
                TweenLite.to(".sidebar", 0.5, {scale:1, opacity:1});
                TweenLite.to(".searchbar", 0.8, {scale:1, opacity:1});
                // video.style.display = "none";
                // document.getElementById("blackbackground").style.visibility = "hidden";
            }
            else if(this.getDirection(".car") == "down") {
                console.log(this.target);
                // document.getElementById(".blackbackground").style.visibility = "hidden";
                TweenLite.to("#map", 0.5, {scale:1, opacity:0});
                TweenLite.to(".sidebar", 0.2, {scale:1, opacity:0});
                TweenLite.to(".searchbar", 0.1, {scale:1, opacity:0});
                webcam.start();
            }
        },
        onThrowUpdate:updateDirections,
        onThrowComplete:function() {
          //move the original marker to end position
          gsap.to(original, {duration:1, x:this.x, y:this.y});
        }
    });

    function updateDirections() {
        //getDirection() can return 3 types of direction...
        directionStart.innerHTML = '"' + this.getDirection("start") + '"'; //direction from start of drag
        directionVelocity.innerHTML = '"' + this.getDirection("velocity") + '"'; //momentary velocity *requires InertiaPlugin
        directionObject.innerHTML = '"' + this.getDirection(logoElement) + '"'; //direction from an object
    }
    
    gsap.set(logoElement, {xPercent:-50, yPercent:-50})

    //Audio Play Song
    function play() {
        var audio = document.getElementById("audio");
        audio.play();
    }

    // Draggable.create(".rearcamera")
