<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/logo.png" width="90" height="90" alt="ChopAfrica">
        Chop.africa</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
        <ul class="navbar-nav  mb-2  ">
          <li class="nav-item">
            <a class="nav-link ">Partner With Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-3 ">Recipe Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-3">Contact Us</a>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
</template>

<script>
  export default {

  }

</script>

<style>
.navbar{
  margin-top: 10px;

}

.nav-link {
     color: #2D4059 !important;
     font-weight: 450;
     font-size: 1.15rem;
}
.navbar-brand{
    font-weight: 600;
  color: #2D4059 !important;
  font-size: 1.3rem;

}

</style>
