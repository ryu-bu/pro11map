<template>
  <table>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>towns[i].name</th>
    <th>towns[i].positive_cases</th>
    <th>towns[i].zip_code</th>
    <th>towns[i].tested</th>
    <th>towns[i].percent_postiive</th>
  </tr>
  <tr>
    <th>Mattapan</th>
    <th>02126</th>
    <th>1,086</th>
    <th>9,609</th>
    <th>11.3%</th>
  </tr>
  <tr>
    <th>Dorchester</th>
    <th>02122, 02124</th>
    <th>3,156</th>
    <th>28,512</th>
    <th>11.1%</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Positive Cases</th>
    <th>Number Tested</th>
    <th>Percent Positive</th>
  </tr>
</table>
</template>


<script>
import axios from 'axios';

export default{
  name: "Quick Stats",
  data(){
    return{
      api_endpoint: 'http://127.0.0.1:8000/api/covid/towns/',
    }
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
                return(
                  `<template>
                    <table>
                    <tr>
                      <th>Name</th>
                      <th>Zip Code</th>
                      <th>Positive Cases</th>
                      <th>Number Tested</th>
                      <th>Percent Positive</th>
                    </tr>
                    <tr>
                      <th>towns[0].name</th>
                      <th>towns[0].positive_cases</th>
                      <th>towns[0].zip_code</th>
                      <th>towns[0].tested</th>
                      <th>towns[0].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[1].name</th>
                      <th>towns[1].positive_cases</th>
                      <th>towns[1].zip_code</th>
                      <th>towns[1].tested</th>
                      <th>towns[1].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[2].name</th>
                      <th>towns[2].positive_cases</th>
                      <th>towns[2].zip_code</th>
                      <th>towns[2].tested</th>
                      <th>towns[2].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[3].name</th>
                      <th>towns[3].positive_cases</th>
                      <th>towns[3].zip_code</th>
                      <th>towns[3].tested</th>
                      <th>towns[3].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[4].name</th>
                      <th>towns[4].positive_cases</th>
                      <th>towns[4].zip_code</th>
                      <th>towns[4].tested</th>
                      <th>towns[4].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[5].name</th>
                      <th>towns[5].positive_cases</th>
                      <th>towns[5].zip_code</th>
                      <th>towns[5].tested</th>
                      <th>towns[5].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[6].name</th>
                      <th>towns[6].positive_cases</th>
                      <th>towns[6].zip_code</th>
                      <th>towns[6].tested</th>
                      <th>towns[6].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[7].name</th>
                      <th>towns[7].positive_cases</th>
                      <th>towns[7].zip_code</th>
                      <th>towns[7].tested</th>
                      <th>towns[7].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[8].name</th>
                      <th>towns[8].positive_cases</th>
                      <th>towns[8].zip_code</th>
                      <th>towns[8].tested</th>
                      <th>towns[8].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[9].name</th>
                      <th>towns[9].positive_cases</th>
                      <th>towns[9].zip_code</th>
                      <th>towns[9].tested</th>
                      <th>towns[9].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[10].name</th>
                      <th>towns[10].positive_cases</th>
                      <th>towns[10].zip_code</th>
                      <th>towns[10].tested</th>
                      <th>towns[10].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[11].name</th>
                      <th>towns[11].positive_cases</th>
                      <th>towns[11].zip_code</th>
                      <th>towns[11].tested</th>
                      <th>towns[11].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[12].name</th>
                      <th>towns[12].positive_cases</th>
                      <th>towns[12].zip_code</th>
                      <th>towns[12].tested</th>
                      <th>towns[12].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[13].name</th>
                      <th>towns[13].positive_cases</th>
                      <th>towns[13].zip_code</th>
                      <th>towns[13].tested</th>
                      <th>towns[13].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[14].name</th>
                      <th>towns[14].positive_cases</th>
                      <th>towns[14].zip_code</th>
                      <th>towns[14].tested</th>
                      <th>towns[14].percent_positive</th>
                    </tr>
                    <tr>
                      <th>towns[15].name</th>
                      <th>towns[15].positive_cases</th>
                      <th>towns[15].zip_code</th>
                      <th>towns[15].tested</th>
                      <th>towns[15].percent_positive</th>
                    </tr>
                  </table>
                </template>`);

        })
    },
  },
};
</script>