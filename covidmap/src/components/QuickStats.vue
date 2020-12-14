<template>
  <span v-html="town"> </span>
</template>


<script>
import axios from 'axios';

export default{
  name: "Quick Stats",
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
                var head = '<table style=height:100%;width:100%;border:1px;border-color:black>'
                var title = '<tr><th style=background-color:lime;padding-right:10px>Name</th><th style=background-color:lime;padding-right:10px>Positive Cases</th><th style=background-color:lime;padding-right:10px>Number Tested</th><th style=background-color:lime;padding-right:10px>Zip Code</th><th style=background-color:lime;padding-right:10px>Percent Positive</th></tr>' //copy and paste the title
                var middle = ''
                for (var i = 0; i < towns.length; i++){
                  var name = towns[i].name;
                  var positive_cases = towns[i].positive_cases;
                  var tested = towns[i].tested;
                  var zip = towns[i].zip_code;
                  var percent = towns[i].percent_positive;

                  middle += `<tr><td style=;background-color:rgb(211,211,211);border-width:1px;border-style:solid>${name}</td><td style=;background-color:rgb(211,211,211);border-width:1px;border-style:solid>${positive_cases}</td><td style=;background-color:rgb(211,211,211);border-width:1px;border-style:solid>${tested}</td><td style=;border-width:1px;background-color:rgb(211,211,211);border-style:solid>${zip}</td><td style=;background-color:rgb(211,211,211);border-width:1px;border-style:solid>${percent}</td></tr>`
                }
                var bottom = '</table>'
                var test = head + title + middle + bottom;
                console.log(test);
                this.town = test
        })
    },
  },
};
</script>