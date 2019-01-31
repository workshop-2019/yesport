<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/live">
        <img src="../assets/yesport-logo-white.png" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <form class="form-inline" action="/action_page.php">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
          </form>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Paris Sportif
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/live">
              Live
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <button type="button" class="btn btn-secondary">
                Se Connecter
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <button type="button" class="btn btn-secondary">
                S'inscrire
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
<style scoped>
.navbar-brand img {
  height: 40px;
}
</style>
