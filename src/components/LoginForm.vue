<template>
  <div class="row text-center custom__form">
    <div class="col-md-8 col-lg-6 form__inputs">
      <p>
        <span class="title">Sign In</span><br /><span class="subtitle"
          >Create an account?
          <router-link to="/register">Go Back</router-link></span
        >
      </p>
      <a-alert
        v-if="!mailVerified"
        message="Email Not Verified"
        description="Please check your inbox, an email has just been sent to you to verify your account, after verification just refresh this page"
        type="error"
      />
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="EMAIL"
            v-model="formState.email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="PASSWORD"
            v-model="formState.password"
            required
          />
        </div>
        <div class="form-group link__forget">
          <router-link to="/forget-password">Forget password?</router-link>
        </div>
        <button type="submit" class="btn btn-primary custom__button">
          SUBMIT
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { auth } from "../firebase/index";
export default {
  name: "LoginForm",
  data() {
    return {
      formState: {},
    };
  },
  computed: {
    ...mapGetters({
      user: "get_user",
    }),
    mailVerified() {
      if (auth.currentUser != null) {
        return auth.currentUser.emailVerified;
      }
      return true;
    },
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("login", this.formState).then(() => {
        if (this.user && this.user.emailVerified) {
          this.$router.push("/");
        } else {
          this.mailVerified = true;
        }
      });
    },
  },
  mounted() {
    if (this.user && !this.user.emailVerified) {
      this.mailVerified = true;
    }
  },
};
</script>
<style scoped>
.title {
  font-size: 30px;
  font-weight: 600;
}

.custom__form {
  justify-content: center;
  margin: auto;
  padding: 30px 0px;
}

.form__inputs {
  background: #eeeeee;
  padding: 40px;
}

.link__forget {
  text-align: right;
}

.form-group {
  margin: 30px 0px;
}

.subtitle {
  font-size: 15px;
  font-weight: 500;
}

.custom__button {
  width: 200px;
  height: 60px;
  border-radius: unset;
}

.ant-alert {
  text-align: left;
}
</style>
