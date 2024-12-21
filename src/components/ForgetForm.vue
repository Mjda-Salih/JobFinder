<template>
  <div class="row text-center custom__form">
    <div class="col-md-8 col-lg-6 form__inputs">
      <p>
        <span class="title">FORGET PASSWORD</span><br /><span class="subtitle"
          >Try to login again?
          <router-link to="/login">Go Back</router-link></span
        >
      </p>
      <a-alert
        v-if="emailSent"
        message="Forget Password"
        description="Please check your inbox, an email has just been sent to reset your password"
        type="success"
        show-icon
      />
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="EMAIL"
            v-model="email"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary custom__button">
          SUBMIT
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgetForm",
  data() {
    return {
      email: "",
      emailSent: false,
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("resetPassword", this.email).then(() => {
        this.emailSent = true;
        setTimeout(() => {
          this.$router.push("/login");
        }, 1500);
      });
    },
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

.ant-alert-with-description {
  text-align: left !important;
}
</style>
