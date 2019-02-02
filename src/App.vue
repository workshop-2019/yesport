<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-4 footer-content">                            
                <img src="./assets/yesport-logo-white.png" width="200"/>                     
                <address>
                    <strong>YNOV - YESPORT TEAM</strong><br /> 12 rue Anatole France<br /> 92000 - Nanterre<br /> <abbr title="Phone">Tél:</abbr> +33(0)6 00 00 00 00
                </address>
              </div>
              <div class="col-md-4">
                <p>
                    Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien.
                </p>
              </div>
              <div class="col-md-4">
                <p>
                    Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien.
                </p>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: { Navbar }
};
</script>
<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

.footer{
    align-items:stretch;
    color:darkgray;
    background-color: #1a1a1a;
    padding: 20px 20px;
    border-top: 1px solid darkgray;
}

</style>