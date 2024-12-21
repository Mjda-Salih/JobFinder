<template>
  <div class="row">
    <div class="col-md-12 text-center text__custom">
      Please Select Your Occupation
    </div>
  </div>
  <div class="row choose__type">
    <div class="col-md-4 card__type text-center">
      <span>I'm looking for a job!</span>
      <button class="btn btn-secondary btn__custom" @click="redirect('job')">
        Job Seeker
      </button>
    </div>
    <div class="col-md-4 card__type text-center">
      <span>I'm looking for workers!</span>
      <button
        class="btn btn-secondary btn__custom"
        @click="redirect('employer')"
      >
        Employer
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChooseTypeAccount",
  methods: {
    redirect(data) {
      if (data == "job") {
        this.$router.push("/register/job-seeker");
      } else {
        this.$router.push("/register/employer");
      }
    },
  },
};
</script>
<style scoped>
.card__type {
  display: flex;
  flex-direction: column;
}

.choose__type {
  height: 400px;
  align-items: center;
  border: 1px black solid;
  background: #f6f6f6;
  justify-content: space-around;
  padding: 20px;
}

.btn__custom {
  height: 140px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.text__custom {
  font-size: 25px;
  margin-bottom: 20px;
}
</style>
