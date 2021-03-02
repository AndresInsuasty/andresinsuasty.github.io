<template>
  <div>
    <div class="redes_sociales">
      <a :href="twitter">Twitter</a><br />
      <a :href="facebook">Facebook</a><br />
      <a :href="instagram">Instagram</a><br />
      <a :href="linkedin">LinedIn</a><br />
    </div>

    <br />

    <div class="navegacion">
      <router-link to="/">Inicio</router-link><br>
      <router-link to="/about">Quien Soy?</router-link> <br />
      <router-link to="/CV">Currículo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      twitter: "https://twitter.com/AndresIns10",
      facebook: "https://www.facebook.com/AndresInsuastyD/",
      instagram: "https://www.instagram.com/andresinsuasty10/",
      linkedin: "https://www.linkedin.com/in/andres-insuasty-d/",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>