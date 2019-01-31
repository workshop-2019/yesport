<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
    <div class="footer"></div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: { Navbar }
};
</script>