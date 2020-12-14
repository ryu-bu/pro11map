<template>
  <!-- <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="height:100px;">
  <a class="navbar-brand" @click="linktopage('GoogleMap')">BOSTON COVID-19 RESOURCE MAP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSyooirtedContent" aria-expanded="false" aria-label="Toggle navigation" v-on:click="toggleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <br>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" @click="linktopage('GoogleMap')">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="linktopage('Quick Stats')">Quick Stats</a> 
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">All City Council Profiles</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/kim-janey">Kim Janey</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/annissa-essaibi-george">Annissa Essaibi George</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/michael-flaherty">Michael Flaherty</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/julia-mejia">Julia Mejia</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/michelle-wu">Michelle Wu</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/lydia-edwards">Lydia Edwards</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/ed-flynn">Ed Flynn</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/frank-baker">Frank Baker</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/andrea-campbell">Andrea Campbell</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/ricardo-arroyo">Ricardo Arroyo</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/matt-omalley">Matt O'Malley</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/kenzie-bok">Kenzie Bok</a>
          <a class="dropdown-item" href="https://www.boston.gov/departments/city-council/liz-breadon">Liz Breadon</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Find Community Resources</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Track Legislation</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Your City Coucilor</a>
      </li>
    </ul>
  </div>
</nav> -->
    <!-- <google-map style="height:100%; width:100%;"/> -->
    <div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#" style="color:#EFEBE6; font-size:50px; font-family:arial" class="mx-auto">BOSTON COVID-19 RESOURCE MAP</b-navbar-brand>
  </b-navbar>

  <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="linktopage('GoogleMap')" right>Home</b-nav-item>
        <b-nav-item @click="linktopage('Mutual Aid')" right>Mutual Aid Map</b-nav-item>
        <b-nav-item @click="linktopage('Quick Stats')" right>Quick Stats</b-nav-item>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        <b-nav-item-dropdown text="All City Council Profiles" right> 
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/kim-janey">Kim Janey</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/annissa-essaibi-george">Annissa Essaibi George</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/michael-flaherty">Michael Flaherty</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/julia-mejia">Julia Mejia</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/michelle-wu">Michelle Wu</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/lydia-edwards">Lydia Edwards</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/ed-flynn">Ed Flynn</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/frank-baker">Frank Baker</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/andrea-campbell">Andrea Campbell</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/ricardo-arroyo">Ricardo Arroyo</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/matt-omalley">Matt O'Malley</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/kenzie-bok">Kenzie Bok</b-dropdown-item>
          <b-dropdown-item href="https://www.boston.gov/departments/city-council/liz-breadon">Liz Breadon</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
    <router-view />
  </div>
</template>

<script>
// import QuickStats from "./components/Quick_stats";

export default {
  name: "App",
  // components: {
  //   QuickStats
  // }
  methods: {
    linktopage(linkname) {
      this.$router.push({
        name:linkname
      })
    },
    toggleNavbar() {
      this.show = !this.show
    }
  }
};

</script>

<style lang="scss">

  @import "assets/custom.scss";

  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

  // General style overrides and custom classes
  body {
    margin: 0;
  }

  .my-widget {
    color: var(--danger);
  }
  // ...
</style>