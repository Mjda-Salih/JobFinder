<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    Promise.all([
      this.$store.dispatch("getJobs"),
      this.$store.dispatch("getTopJobs"),
      this.$store.dispatch("getCountries"),
    ]);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
body {
  font-family: "Poppins";
  height: 100% !important;
  background-color: #fff !important;
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
  overflow-x: hidden;
}

#app {
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
