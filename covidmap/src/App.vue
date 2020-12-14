<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#" style="color:#EFEBE6; font-size:50px; font-family:arial" class="mx-auto">BOSTON COVID-19 RESOURCE MAP</b-navbar-brand>
    </b-navbar>
    <!-- toggleable nav bar-->
    <b-navbar toggleable="lg" type="dark" variant="primary">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- elements inside the nav bar first three are links to other .vue pages
          in components folder last is dropdown menu that leads to city councilors website -->
          <b-nav-item @click="linktopage('GoogleMap')" right>Home</b-nav-item>
          <b-nav-item @click="linktopage('Mutual Aid')" right>Mutual Aid Map</b-nav-item>
          <b-nav-item @click="linktopage('Quick Stats')" right>Quick Stats</b-nav-item>
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
    //pushes the page that is called 
    linktopage(linkname) {
      this.$router.push({
        name:linkname
      })
    },
    //toggles the navbar visibility
    toggleNavbar() {
      this.show = !this.show
    }
  }
};

</script>

<style lang="scss">

  //importing css
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