<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top "><!-- opaque-navbar-->
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
            <router-link class="nav-link" to="/home">
              HOME
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bets">
              PARIS EN DIRECT
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/live">
              <div><span class="dot"></span> LIVE </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ticketing">
              BILLETTERIE
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <button type="button" class="btn btn-secondary">
                SE CONNECTER
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <button type="button" class="btn btn-secondary">
                S'INSCRIRE
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
.navbar{
  border-bottom: 1px solid darkgray;
}
.navbar-brand img {
  height: 40px;
}

a:hover, a:active{
  font-weight: bold;
  color: white;
}

.dot {
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
}
.opaque-navbar {
    background-color: rgba(0,0,0,0.5);
    height: 60px;
    border-bottom: 0px;
    transition: background-color .5s ease 0s;
}

.opaque-navbar.opaque {
    background-color: black;
    height: 60px;
    transition: background-color .5s ease 0s;
}


</style>
