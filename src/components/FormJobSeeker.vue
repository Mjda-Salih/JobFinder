<template>
  <div class="row text-center custom__form">
    <div class="col-md-8 col-lg-6 form__inputs">
      <p>
        <span class="title">JOB SEEKER</span><br /><span class="subtitle"
          >Not Job Seeking?
          <router-link to="/register">Go Back</router-link></span
        >
      </p>
      <form @submit.prevent="handleSubmit">
        <a-alert
          v-if="
            formState.c_password.length > 3 &&
            formState.password != formState.c_password
          "
          message="Passwords doesn't match"
          type="error"
          show-icon
        />
        <a-alert
          v-if="formState.password.length > 3 && formState.password.length < 8"
          message="Password must contain at least 8 characters"
          type="error"
          show-icon
        />
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
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="REPEAT PASSWORD"
            v-model="formState.c_password"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="FIRST NAME"
            v-model="formState.firstName"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="SURNAME"
            v-model="formState.surname"
            required
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            placeholder="ADDRESS"
            v-model="formState.address"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="CONTACT NUMBER"
            v-model="formState.contactNumber"
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
  name: "FormJobSeeker",
  data() {
    return {
      formState: {
        c_password: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      if (
        this.formState.c_password == this.formState.password &&
        this.formState.password.length >= 8
      ) {
        this.$store.dispatch("register", this.formState).then(() => {
          this.$router.push("/login");
        });
      }
    },
  },
  mounted() {
    this.formState.type = "job-seeker";
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
</style>
