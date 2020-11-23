<template>
  <span v-html="town">
    test
  </span>
</template>


// <script>
import axios from 'axios';

export default{
  name: "QuickStats",
  data(){
    return{
      api_endpoint: 'http://127.0.0.1:8000/api/covid/towns/',
      town: [],
    };
  },
  mounted(){
    this.getAPI();
  },
  methods: {
    setPlace(place){
      this.currentPlace = place;
    },
    getAPI(){
      return axios  
        .get(this.api_endpoint)
        .then((res) => {
                console.log(res.data);
                const towns = res.data;
                var head = '<table>'
                var title = '<tr><th style=padding-right:10px;>Name</th><th style=padding-right:10px;>Positive Cases</th><th style=padding-right:10px>Number Tested</th><th style=padding-right:10px>Zip Code</th><th style=style=padding-right:10px>Percent Positive</th></tr>' //copy and paste the title
                var middle = ''
                for (var i = 0; i < towns.length; i++){
                  var name = towns[i].name;
                  var positive_cases = towns[i].positive_cases;
                  var tested = towns[i].tested;
                  var zip = towns[i].zip_code;
                  var percent = towns[i].percent_positive;

                  middle += `<tr><td>${name}</td><td>${positive_cases}</td><td>${tested}</td><td>${zip}</td><td>${percent}</td></tr>`
                }
                var bottom = '</table>'
                var content = head + title + middle + bottom;
                console.log(content);
                this.town.push({content});
                console.log(this.town);
        })
    },
  },
};
</script>