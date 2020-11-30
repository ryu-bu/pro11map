<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="height:100px;">
  <a class="navbar-brand" href="#">BOSTON COVID-19 RESOURCE MAP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <br>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Quick Stats</a> 
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
</nav>
    <!-- <google-map style="height:100%; width:100%;"/> -->
    <QuickStats />
  </div>
</template>

<script>
  //  import GoogleMap from "./components/GoogleMap";
import QuickStats from "./components/Quick_stats";

export default {
  name: "App",
  components: {
    // GoogleMap
    QuickStats
  }
};


</script>