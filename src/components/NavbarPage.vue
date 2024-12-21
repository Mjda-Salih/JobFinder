<template>
  <div class="container-fluid">
    <div class="row bg-light">
      <div class="col-md-12">
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light navbar__custom"
        >
          <router-link class="navbar-brand" to="/">Home</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav" style="margin-left: auto">
              <!-- <router-link class="nav-item nav-link" to="/help">Help</router-link> -->
              <div style="margin: 0px 25px">
                <a-dropdown v-if="userInfo">
                  <a class="ant-dropdown-link" @click.prevent>
                    {{ userInfo?.surname }}
                    <DownOutlined />
                  </a>
                  <template #overlay>
                    <a-menu>
                      <a-menu-item key="0">
                        <router-link rel="noopener noreferrer" to="/profile">
                          Profile
                        </router-link>
                      </a-menu-item>
                      <div v-if="userInfo.type == 'employer'">
                        <a-menu-item key="1">
                          <router-link
                            rel="noopener noreferrer"
                            to="/manage-jobs"
                          >
                            Manage Jobs
                          </router-link>
                        </a-menu-item>
                      </div>
                      <div v-else>
                        <a-menu-item key="1">
                          <router-link rel="noopener noreferrer" to="/jobs">
                            Job Offers
                          </router-link>
                        </a-menu-item>
                        <a-menu-item key="1">
                          <router-link
                            rel="noopener noreferrer"
                            to="/jobs-applied"
                          >
                            Jobs Applied
                          </router-link>
                        </a-menu-item>
                      </div>
                      <a-menu-divider />
                      <a-menu-item key="3">
                        <a @click="logout">Logout</a>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </div>
              <div class="d-flex" v-if="!userInfo">
                <router-link class="nav-item nav-link" to="/register"
                  >Register</router-link
                >
                <router-link class="nav-item nav-link" to="/login"
                  >Sign In</router-link
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { DownOutlined } from "@ant-design/icons-vue";
import { auth } from "../firebase/index.js";
export default {
  name: "Navbar",
  components: {
    DownOutlined,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
  },
  computed: {
    ...mapGetters({
      user: "get_user",
      userInfo: "get_user_info",
    }),
  },
  mounted() {},
};
</script>
<style>
.navbar__custom {
  font-weight: 600;
  font-size: 15px;
  padding: 25px;
}
.navbar-nav {
  align-items: center;
}
.nav-link {
  margin: 0px 20px;
}
</style>
