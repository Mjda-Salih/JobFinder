import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/manage-jobs",
    name: "ManageJobs",
    component: () => import("../views/ManageJobs.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.auth.user && store.state.auth.user.emailVerified) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.user) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.user) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/register/job-seeker",
    name: "RegisterJobSeeker",
    component: () => import("@/views/RegisterJobSeeker.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.user) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/register/employer",
    name: "RegisterEmployer",
    component: () => import("@/views/RegisterEmployer.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.user) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/forget-password",
    name: "ForgetPassword",
    component: () => import("@/views/ForgetPassword.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.user) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/profile",
    name: "UpdateProfile",
    component: () => import("@/views/UpdateProfile.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.auth.user && store.state.auth.user.emailVerified) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/add-job",
    name: "AddJob",
    component: () => import("@/views/AddJob.vue"),
    beforeEnter: (to, from, next) => {
      if (
        store.state.auth.user &&
        store.state.auth.user.emailVerified &&
        store.state.auth.userInfo?.type === "employer"
      ) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/jobs",
    name: "ListJobs",
    component: () => import("@/views/ListJobs.vue"),
    props: (route) => ({ where: route.query.where, what: route.query.what }),
  },
  {
    path: "/jobs/:id?/apply",
    name: "ApplyJob",
    component: () => import("@/views/ApplyJob.vue"),
    beforeEnter: (to, from, next) => {
      if (
        store.state.auth.user &&
        store.state.auth.user.emailVerified &&
        store.state.auth.userInfo?.type !== "employer"
      ) {
        next();
      } else {
        next("/login");
      }
    },
    props: true,
  },
  {
    path: "/jobs/:id?/edit",
    name: "EditJob",
    component: () => import("@/views/EditJob.vue"),
    beforeEnter: (to, from, next) => {
      if (
        store.state.auth.user &&
        store.state.auth.user.emailVerified &&
        store.state.auth.userInfo?.type === "employer"
      ) {
        next();
      } else {
        next("/login");
      }
    },
    props: true,
  },
  {
    path: "/jobs-applied",
    name: "JobsApplied",
    component: () => import("@/views/JobsApplied.vue"),
    beforeEnter: (to, from, next) => {
      if (
        store.state.auth.user &&
        store.state.auth.user.emailVerified &&
        store.state.auth.userInfo?.type !== "employer"
      ) {
        next();
      } else {
        next("/login");
      }
    },
    props: true,
  },
  {
    path: "/jobs/:id?/applies",
    name: "CandidateApplies",
    component: () => import("@/views/CandidateApplies.vue"),
    beforeEnter: (to, from, next) => {
      if (
        store.state.auth.user &&
        store.state.auth.user.emailVerified &&
        store.state.auth.userInfo?.type === "employer"
      ) {
        next();
      } else {
        next("/login");
      }
    },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
