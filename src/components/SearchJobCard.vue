<template>
  <div class="col-md-10 sub_items d-flex">
    <a-input v-model:value="what" placeholder="Job title, keywords, or company">
      <template #prefix>
        <p class="prefix__title">What</p>
      </template>
      <template #suffix>
        <a-tooltip>
          <search-outlined />
        </a-tooltip>
      </template>
    </a-input>
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent style="width: 100%">
        <a-input v-model:value="where" placeholder="Country">
          <template #prefix>
            <p class="prefix__title">Where</p>
          </template>
          <template #suffix>
            <a-tooltip>
              <aim-outlined />
            </a-tooltip>
          </template>
        </a-input>
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="(country, index) in countriesG" :key="index">
            <a @click="where = country.name">{{ country.name }}</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <a-button type="primary" @click="searchJob">Find jobs</a-button>
  </div>
</template>
<script>
import { AimOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { mapGetters } from "vuex";
export default {
  name: "SearchJobCard",
  data() {
    return {
      what: "",
      where: "",
    };
  },
  computed: {
    ...mapGetters({
      countriesG: "get_countries",
    }),
  },
  methods: {
    searchJob() {
      if (this.what != "" && this.where != "") {
        this.$router.push(`/jobs?where=${this.where}&what=${this.what}`);
      }
    },
  },
  components: {
    AimOutlined,
    SearchOutlined,
  },
  mounted() {
    this.$store.dispatch("getCountries");
  },
};
</script>
<style scoped>
.prefix__title {
  font-weight: bold;
  margin: 0px 10px 0px 0px;
}
.sub_items > * {
  margin: 10px;
}
</style>
