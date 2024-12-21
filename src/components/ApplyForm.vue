<template>
  <div class="row">
    <a-spin v-if="!job" size="large" />
    <div class="col-md-6 custom__form">
      <JobCard :job="job" :apply="true" />
    </div>
  </div>
  <div v-if="job && !checkApply" class="row text-center custom__form">
    <div class="col-md-8 col-lg-6 form__inputs">
      <p><span class="title">Apply Job</span></p>

      <a-alert
        v-if="cv_link != ''"
        message="CV Uploaded Successfully"
        type="success"
        show-icon
      />
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input
            type="file"
            class="form-control"
            @change="changeFile"
            required
          />
        </div>
        <a-progress v-if="cv_link == ''" :percent="prog" size="small" />
        <button
          v-if="cv_link != ''"
          type="submit"
          class="btn btn-primary custom__button my-3"
        >
          Apply
        </button>
        <button v-else class="btn btn-primary custom__button my-3" disabled>
          Apply
        </button>
      </form>
    </div>
  </div>
  <div v-if="job && checkApply" class="row text-center custom__form">
    <div class="col-md-8 col-lg-6 form__inputs">
      <p><span class="title">Already Applied</span></p>
      <a-result status="warning" title="You've already applied for this job.">
        <template #extra>
          <router-link to="/jobs">
            <a-button key="console" type="primary">Job Offers</a-button>
          </router-link>
        </template>
      </a-result>
    </div>
  </div>
</template>
<script>
import JobCard from "./JobCard.vue";
import { mapGetters } from "vuex";
import { storage } from "../firebase/index";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { notification } from "ant-design-vue";
export default {
  name: "ApplyForm",
  components: {
    JobCard,
  },
  data() {
    return {
      formState: {},
      job: null,
      cv_link: "",
      prog: 0,
      checkApply: false,
    };
  },
  computed: {
    ...mapGetters({
      jobs: "get_jobs",
      user: "get_user",
    }),
  },
  methods: {
    openNotificationWithIcon() {
      notification["success"]({
        message: "Applied Successfully",
        description: "Thank you for applying",
      });
    },
    handleSubmit() {
      let data = {
        candidateEmail: this.user.email,
        jobId: this.$route.params.id,
        candidateCV: this.cv_link,
        status: "Sent",
      };
      this.$store.dispatch("applyForJob", data).then(() => {
        this.openNotificationWithIcon();
        setTimeout(() => {
          this.$router.push("/jobs");
        }, 1500);
      });
    },
    changeFile(e) {
      this.cv_link = "";
      const file = e.target.files[0];
      const storageRef = ref(storage, `cv/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.prog = prog;
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            (url) => (this.cv_link = url)
          );
        }
      );
    },
  },
  beforeCreate() {
    this.$store.dispatch("getJobs").then(() => {
      this.job = this.jobs.find(
        (item) => item.uid_job == this.$route.params.id
      );
      let data = {
        jobId: this.$route.params.id,
        candidateEmail: this.user.email,
      };
      this.$store.dispatch("checkUserApply", data).then((resp) => {
        this.checkApply = resp;
      });
      this.$store.dispatch("updateViews", data.jobId);
    });
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
