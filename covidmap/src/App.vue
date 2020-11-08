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
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All City Council Profiles
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
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
    <google-map style="height:100%; width:100%;"/>
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap";

export default {
  name: "App",
  components: {
    GoogleMap
  }
};
</script>