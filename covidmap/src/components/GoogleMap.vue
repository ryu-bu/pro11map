<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="12"
      :options="{
          fullscreenControl: true,
          styles: mapstyle
          }"
      style="width:100%;  height:93.5vh;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="infoWindow(m)"
      ></gmap-marker>

      <gmap-info-window
        :options="infoOptions"
        :position="winPos"
        :opened="isOpen"
        @closeclick="isOpen=false"
      >
        <div v-html="infoContent"></div>
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      api_endpoint: 'http://127.0.0.1:8000/api/covid/towns/',
      covid_case: [],
      center: { lat: 42.361, lng: -71.057 },
      isOpen: false,
      currentWin: null,
      infoContent: '',
      winPos: {
          lat: 0,
          lng: 0
        },
      markers: [
          {
              name: "East Boston",
              position: { lat: 42.3695, lng: -71.0201  }
          },
          {
              name: "Mattapan",
              position: { lat: 42.2771, lng: -71.0914}
          },
          {
              name: "Hyde Park",
              position: { lat: 42.2528, lng: -71.1300 }
          },
          {
              name: "Dorchester1",
              position: { lat: 42.2967, lng: -71.0527 }
          },
          {
              name: "Dorchester2",
              position: { lat: 42.3157, lng: -71.0527 }
          },
          {
              name: "Roslindale",
              position: { lat: 42.2832, lng: -71.1270 }
          },
          {
              name: "Roxbury",
              position: { lat: 42.3152, lng: -71.0914 }
          },
          {
              name: "West Roxbury",
              position: { lat: 42.2798, lng: -71.1627 }
          },
          {
              name: "South End",
              position: { lat: 42.3388, lng: -71.0765 }
          },
          {
              name: "Jamaica Plain",
              position: { lat: 42.3097, lng: -71.1151 }
          },
          {
              name: "South Boston",
              position: { lat: 42.3381, lng: -71.0476 }
          },
          {
              name: "Allston/Brighton",
              position: { lat: 42.3539, lng: -71.1337 }
          },
          {
              name: "Charlestown",
              position: { lat: 42.3795, lng: -71.0646 }
          },
          {
              name: "Back Bay, Beacon Hill, West End, Downtown, & North End",
              position: { lat: 42.3588, lng: -71.0707 }
          },
          {
              name: "Fenway",
              position: { lat: 42.3429, lng: -71.1003 }
          },
          {
              name: "Boston",
              position: { lat: 42.3601, lng: -71.0589 }
          }
      ],
      places: [],
      infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
      mapstyle: [
  // Neighborhood names
  {
    "featureType": "administrative",
    "stylers": [
      {"color": "#000000"},
      {"saturation": 0},
      {"lightness": 60},
      {"visibility": "simplified"},
      {"weight": 0.5}
    ]
  },
  {
    "featureType": "administrative.locality",
    "stylers": [
      {"color": "#000000"},
      {"saturation": 0},
      {"lightness": 25},
      {"visibility": "simplified"},
      {"weight": 0.5}
    ]
  },

  // Points of interest, medical labels and medical and park fill 
  {
      "elementType": "labels",
      "stylers": [
          {"visibility": "on"},
          //{"color": "#ffffff"},
          {"weight": 0.5}
      ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
        {"visibility": "off"},
        {"color": "#645c20"},
        {"lightness": 38},
    ]
  },
  {
    "featureType": "poi.medical",
    "stylers": [
        {"visibility": "on"},
        {"color": "#813033"},
        {"lightness": 0},
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry.fill",
    "stylers": [
        {"visibility": "on"},
        {"color": "#c47275"},
        {"lightness": 0},
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
        {"visibility": "on"},
        {"color": "#645c20"},
        {"lightness": 39},
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
        {"visibility": "off"},
    ]
  },
  {
    "featureType": "poi.school",
    "stylers": [
        {"visibility": "off"},
        {"color": "#a95521"},
        {"lightness": 35}
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "geometry.fill",
    "stylers": [
        {"visibility": "on"},
        {"color": "#a95521"},
        {"lightness": 35}
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "stylers": [
        {"visibility": "off"},
        {"color": "#9e5916"},
        {"lightness": 32}
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
        {"visibility": "off"},
        {"color": "#9e5916"},
        {"lightness": 46}
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
        {"visibility": "off"},
        {"lightness": 46}
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
        {"visibility": "off"},
        {"lightness": 46}
    ]
  },



  {
      "featureType": "landscape",
      "stylers": [
          {"color": "#f9ddc5"},
          {"lightness": -7}
      ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "labels.text",
    "stylers": [
      {"visibility": "off"},
    ]
},
 {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {"color": "#1994bf"},
          {"saturation": -69},
          {"gamma": 0.99},
          {"lightness": 43}
      ]
  },


  {
      "featureType": "road",
      "stylers": [
          {"color": "#f19f53"},
          {"lightness": 0},
          {"visibility": "on"},
      ]
  },
 
  {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
          {"color": "#f19f53"},
          {"weight": 1.3},
          {"visibility": "on"},
          {"lightness": 16},
          {"weight": 1.3}
      ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [
        {"color": "#f19f53"},
        {"lightness": -10}
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {"visibility": "off"}
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "labels",
    "stylers": [
      {"visibility": "off"}
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {"visibility": "on"}
    ]
  },


  {
      "featureType": "transit.station",
  },
  {
      "featureType": "transit.line",
      "stylers": [
          {"color": "#813033"},
          {"lightness": 22}
      ]
  },
  {
      "featureType": "transit",
      "stylers": [
          {"lightness": 38},
          {"visibility": "off"}
      ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {"visibility": "on"}
    ]
  },
],
    };
  },

  mounted() {
      this.getAPI();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    getAPI() {
        return axios
            .get(this.api_endpoint)
            .then((res) => {
                console.log(res.data);
                const towns = res.data;
                var dtrigger = false;
                for (var i = 0; i < towns.length; i++){
                    if (towns[i].name !== "Dorchester"){
                        this.covid_case.push({
                            name: towns[i].name,
                            case: towns[i].positive_cases,
                            zip: towns[i].zip_code,
                            tested: towns[i].tested,
                            percent: towns[i].percent_positive
                        })
                    }
                    else {
                        if (!dtrigger){
                            this.covid_case.push({
                                name: "Dorchester1",
                                case: towns[i].positive_cases,
                                zip: towns[i].zip_code,
                                tested: towns[i].tested,
                                percent: towns[i].percent_positive
                            });
                            dtrigger = true;
                        }
                        else {
                            this.covid_case.push({
                                name: "Dorchester2",
                                case: towns[i].positive_cases,
                                zip: towns[i].zip_code,
                                tested: towns[i].tested,
                                percent: towns[i].percent_positive
                            })
                        }
                    }
                }

                console.log();
            })
            .catch((err) => {
                console.log(err);
            })
    },
    infoWindow(m, index){
        this.winPos = m.position;
        this.infoContent = this.getContent(m);

        if (this.currentWin == index){
            this.isOpen = !this.isOpen;
        }
        else {
            this.isOpen = true;
            this.currentWin = index;
        }
    },
    getContent(m){
        let town = this.covid_case.find((el) => el.name === m.name);
        return (`<div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <h3 class="display-4">${town.name}</h3>
      </div>
    </div>
    <div class="content">
        ZIP Code: ${town.zip}
    </div>
    <div style="font-size:20px;">
        <strong>Total Cases:</strong> ${town.case} <br>
        <strong>Total Tested:</strong> ${town.tested} <br>
        <strong>Percent Positive:</strong> ${town.percent}
    </div>
  </div>
</div>`);
    }
  },
  
};
</script>