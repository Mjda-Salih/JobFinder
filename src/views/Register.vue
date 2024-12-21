<template>
  <Layout>
    <ChooseTypeAccount />
  </Layout>
</template>
<script>
import ChooseTypeAccount from "@/components/ChooseTypeAccount.vue";
import Layout from "./Layout/Layout.vue";
export default {
  name: "Register",
  components: {
    ChooseTypeAccount,
    Layout,
  },
};
</script>
<style></style>
