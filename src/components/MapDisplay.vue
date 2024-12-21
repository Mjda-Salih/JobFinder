<template>
  <div
    v-if="userInfo && type != 'employer'"
    class="row justify-content-center"
    style="margin-bottom: 50px"
  >
    <img :src="imageJob" style="width: 50%; margin-bottom: 50px" />
    <SearchJobCard />
  </div>
  <div class="row" v-else>
    <div class="col-md-12 mobile_responsive">
      <ul>
        <li>
          <b>Nothern Ireland</b> :
          <span :class="{ green: countryData.NIR > 0 }">{{
            countryData.NIR
          }}</span>
        </li>
        <li>
          <b>Scotland</b> :
          <span :class="{ green: countryData.SCT > 0 }">{{
            countryData.SCT
          }}</span>
        </li>
        <li>
          <b>England</b> :
          <span :class="{ green: countryData.ENG > 0 }">{{
            countryData.ENG
          }}</span>
        </li>
        <li>
          <b>Wales</b> :
          <span :class="{ green: countryData.WLS > 0 }">{{
            countryData.WLS
          }}</span>
        </li>
      </ul>
    </div>
    <div
      class="col-md-12 text-center"
      v-if="Object.keys(countryData).length != 0"
    >
      <img :src="imageMap" />
    </div>
    <span class="NIR desktop">{{ countryData.NIR }}</span>
    <span class="SCT desktop">{{ countryData.SCT }}</span>
    <span class="ENG desktop">{{ countryData.ENG }}</span>
    <span class="WLS desktop">{{ countryData.WLS }}</span>
  </div>
</template>
<script>
import SearchJobCard from "./SearchJobCard.vue";
import image from "../assets/maps/mapOfficial.png";
import JobPortal from "../assets/img/JobPortal.png";
import MapChart from "vue-map-chart";
import { mapGetters } from "vuex";
export default {
  name: "MapDisplay",
  components: {
    MapChart,
    SearchJobCard,
  },
  computed: {
    ...mapGetters({
      userInfo: "get_user_info",
    }),
    type() {
      return this.userInfo?.type;
    },
    getCountryData() {
      return this.countryData;
    },
  },
  data() {
    return {
      imageMap: image,
      imageJob: JobPortal,
      countryData: {},
    };
  },
  created() {
    this.$store.dispatch("getNbrJobsPerCountry").then((resp) => {
      this.countryData = resp;
    });
  },
};
</script>
<style scoped>
.mobile_responsive {
  display: none;
}
.NIR {
  position: relative;
  top: -373px;
  left: 486px;
  font-weight: bold;
  font-size: 22px;
}
.SCT {
  position: relative;
  top: -604px;
  left: 667px;
  font-weight: bold;
  font-size: 25px;
}
.ENG {
  position: relative;
  top: -337px;
  left: 808px;
  font-weight: bold;
  font-size: 25px;
}
.WLS {
  position: relative;
  top: -317px;
  left: 677px;
  font-weight: bold;
  font-size: 22px;
}

@media screen and (max-width: 992px) {
  img {
    width: 100%;
  }
  .desktop {
    display: none;
  }
  .mobile_responsive {
    display: block;
  }
}

@media screen and (max-width: 1399px) {
  .NIR {
    position: relative;
    top: -369px;
    left: 400px;
    font-weight: bold;
    font-size: 20px;
  }
  .SCT {
    position: relative;
    top: -604px;
    left: 589px;
    font-weight: bold;
    font-size: 20px;
  }
  .WLS {
    position: relative;
    top: -317px;
    left: 590px;
    font-weight: bold;
    font-size: 20px;
  }
  .ENG {
    position: relative;
    top: -337px;
    left: 710px;
    font-weight: bold;
    font-size: 20px;
  }
}

@media screen and (max-width: 1199px) {
  .NIR {
    position: relative;
    top: -369px;
    left: 313px;
    font-weight: bold;
    font-size: 20px;
  }
  .SCT {
    position: relative;
    top: -604px;
    left: 500px;
    font-weight: bold;
    font-size: 20px;
  }
  .WLS {
    position: relative;
    top: -317px;
    left: 507px;
    font-weight: bold;
    font-size: 20px;
  }
  .ENG {
    position: relative;
    top: -337px;
    left: 632px;
    font-weight: bold;
    font-size: 20px;
  }
}

.green {
  background: #39870d;
  padding: 0px 5px;
  color: white;
}
</style>
