
var data = [
    {
     "name": "A pizza hat",
     "location": " north cresecent ",
     "description": "Finally, you can indulge in everyone’s life-long desire of wearing pizza atop their head. Beware the sprinkled parmesan as you nod or shake your head, though—some might mistake it for dandruff.",
     "image":"pizza.jpg",
     "price":"$11.62",
     
     
    },
    {
      "name": "A Nicolas Cage sequin pillowcase",
      "location": " nathu shopping centre",
      "description": "buy now on Amazon The only thing better than a festive red sparkly pillowcase is one that morphs into Nicolas Cage’s face with the satisfying swipe of your hand.",
      "image": "pillow.jpg",
      "price":"$24.95",
    
    },
    {
      "name": "Uranium ore",
      "location": "big bay road",
      "description": " While this small amount of uranium ore is pretty low on the radioactivity meter, it’s pretty weird that you can buy it from the same site where you get your gym socks. And for more possessions to ditch, discover these 30 Home Decorations No One Over 30 Should Own.",
      "image": "Uranium-ore.jpg",
      "price":"$39.95",
    
    },
]

var htmlText = '';

for ( var key in data ) {
htmlText += '<div style="box-shadow: 0 4px 8px 0 rgba(0,0,255, 0.1); text-align: center;font-family: arial;" class="div-conatiner">';
htmlText += '<h2 class="p-name"> Name: ' + data[key].name + '</h2>';
htmlText += '<img style=" max-width: 300px;" src= ' +data[key].image +'>';
htmlText += '<h3 class="p-loc"> Location: ' + data[key].location + '</h3>';
htmlText += '<h3 class="p-loc"> Price: ' + data[key].price + '</h3>';

htmlText += '<h4 class="p-desc"> Description: ' + data[key].description + '</h4>';
htmlText += '</div>';
}

$('body').append(htmlText);
    
        function getJSONMarkers() {
          const markers = [
            {
              name:  "A pizza hat",
              location: [25.1212, 55.1535]
            },
            {
              name: "A Nicolas Cage sequin pillowcase",
              location: [25.2084, 55.2719]
            },
            {
              name: "Uranium ore",
              location: [25.2285, 55.3273]
            }
          ];
          return markers;
        }

        function loadMap() {
          // Google Maps initialization
          const mapOptions = {
            center:new google.maps.LatLng(25.2048, 55.2708),
            zoom: 11
          }
          const map = new google.maps.Map(document.getElementById("map"), mapOptions);

          // Loading JSON Data
          const hotelMarkers = getJSONMarkers();

          //  Google Markers Initialize
          for(hotel of hotelMarkers) {
            let marker = new google.maps.Marker({
              map: map,
              position: new google.maps.LatLng(hotel.location[0], hotel.location[1]),
              title: hotel.name
            })
          }
        }
  