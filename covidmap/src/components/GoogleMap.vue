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
// import Vue from "vue";

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
    "elementType": "labels",
    "stylers": [
      {
        "color": "#454545"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "stylers": [
      {
        "color": "#f46f20"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#424243"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0054a6"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#9aafc1"
      }
    ]
  }

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
        console.log("test");
        console.log(this.winPos);
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
        let content;
        switch(town.zip){
          case "02128": 
            content = '<a href= "https://www.boston.gov/departments/city-council/lydia-edwards">Lydia Edwards</a> | 617-635-3200<br>';
            break;
          case "02126":
            content = '<a href= "https://www.boston.gov/departments/city-council/andrea-campbell">Andrea Campbell</a> | 617-635-3131<br>';
            break;
          case "02122, 02124":
            content = '<a href= "https://www.boston.gov/departments/city-council/frank-baker">Frank Baker</a> | 617-635-3455<br>';
            break;
          case "02121, 02125":
            content = '<a href= "https://www.boston.gov/departments/city-council/andrea-campbell">Andrea Campbell</a> | 617-635-3131<br>';
            break;
          case "02136":
            content = '<a href= "https://www.boston.gov/departments/city-council/ricardo-arroyo">Ricardo Arroyo</a> | 617-635-4210<br>';
            break;
          case "02131":
            content = '<a href= "https://www.boston.gov/departments/city-council/ricardo-arroyo">Ricardo Arroyo</a> | 617-635-4210<br> <a href= "https://www.boston.gov/departments/city-council/andrea-campbell">Andrea Campbell</a>| 617-635-3131<br>';
            break;
          case "02119, 02120":
            content = '<a href= "https://www.boston.gov/departments/city-council/kim-janey">Kim Janey</a> | 617-635-3510<br>';
            break;
          case "02132":
            content = '<a href= "https://www.boston.gov/departments/city-council/matt-omalley">Matt O\'Malley</a> | 617-635-4220<br>';
            break;
          case "02111, 02118":
            content = '<a href= "https://www.boston.gov/departments/city-council/ed-flynn">Ed Flynn</a> | 617-635-3203<br>';
            break;
          case "02127, 02210":
            content = '<a href= "https://www.boston.gov/departments/city-council/ed-flynn">Ed Flynn</a> | 617-635-3203<br>';
            break;
          case "02130":
            content = '<a href= "https://www.boston.gov/departments/city-council/matt-omalley">Matt O\'Malley</a> | 617-635-4220<br> <a href= "https://www.boston.gov/departments/city-council/andrea-campbell">Andrea Campbell</a>| 617-635-3131<br>';
            break;
          case "02129":
            content = '<a href= "https://www.boston.gov/departments/city-council/lydia-edwards">Lydia Edwards</a> | 617-635-3200<br>';
            break;
          case "02163, 02134, 02135":
            content = '<a href= "https://www.boston.gov/departments/city-council/liz-breadon">Liz Breadon</a> | 617-635-3113<br>';
            break;
          case "02108, 02114, 02116, 02199, 02222, 02109, 02110, 02113":
            content = '<a href= "https://www.boston.gov/departments/city-council/kenzie-bok">Kenzie Bok</a> | 617-635-4225 <br> <a href= "https://www.boston.gov/departments/city-council/ed-flynn">Ed Flynn</a> | 617-635-3203 <br> <a href= "https://www.boston.gov/departments/city-council/lydia-edwards">Lydia Edwards</a> | 617-635-3200<br>';
            break;
          case "02115, 02215":
            content = '<a href= "https://www.boston.gov/departments/city-council/kenzie-bok">Kenzie Bok</a> | 617-635-4225<br>';
            break;
          default:
            content = '<a href= "https://www.boston.gov/departments/city-council/kim-janey">Kim Janey</a> | 617-635-3510<br>';
            break;
        }
        return (`
<div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <h3 class="display-4">${town.name}</h3>
      </div>
    </div>
    <div>
      ${content}
    </div>
    <div class="content">
        ZIP Code: ${town.zip}  02128
    </div>
    <div style="font-size:20px;">
        <strong>Total Cases:</strong> ${town.case} <br>
        <strong>Total Tested:</strong> ${town.tested} <br>
        <strong>Percent Positive:</strong> ${town.percent}
    </div>
  </div>
</div>`);
    },
  },
  
};
</script>