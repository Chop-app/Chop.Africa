<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/images/logo.png"
          width="90"
          height="90"
          alt="ChopAfrica"
        />
        Chop.africa</a
      >
      <button
        style="border: none"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i
          class="fa-solid fa-burger fa-2x"
          style="color: var(--brand-color)"
        ></i>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarTogglerDemo02"
      >
        <ul class="navbar-nav mb-2 space-ul">
          <li class="nav-item">
            <a class="nav-link space">Partner With Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link margin-left space">Recipe Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link margin-left space">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  margin-top: 10px;
  .container-fluid {
    padding: 0 !important;
  }
}

.nav-link {
  color: var(--brand-color) !important;
  font-weight: 450;
  font-size: 1.15rem;
}
.navbar-brand {
  font-weight: 600;
  color: var(--brand-color) !important;
  font-size: 1.3rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
}
.margin-left {
  margin-left: 20px;
  @media (max-width: 992px) {
    margin-left: 0;
  }
}
.space-ul {
  @media (max-width: 992px) {
    margin: 20px;
  }
  .space {
    cursor: pointer;
    @media (max-width: 992px) {
      padding: 10px 0 10px 30px;
    }
  }
}
</style>
