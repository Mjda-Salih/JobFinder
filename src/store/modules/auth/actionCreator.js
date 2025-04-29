import mutations from "./mutations";
import { auth, db } from "../../../firebase/index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import {
  where,
  query,
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import router from "../../../router/index";

const state = {
  user: null,
  userInfo: null,
};

const getters = {
  get_user(state) {
    return state.user;
  },
  get_user_info(state) {
    return state.userInfo;
  },
};

const actions = {
  async updateInfo({ commit }, data) {
    let resp = await updateDoc(
      doc(db, `users/${auth.currentUser.uid}`),
      data
    ).then(async () => {
      const q = query(
        collection(db, "users"),
        where("email", "==", auth.currentUser.email)
      );
      const querySnap = await getDocs(q);
      querySnap.forEach((doc) => {
        commit("SET_USER_INFO", doc.data());
      });
    });

    return resp;
  },
  async getUserInfo({ commit }) {
    const q = query(
      collection(db, "users"),
      where("email", "==", auth.currentUser.email)
    );
    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
      commit("SET_USER_INFO", doc.data());
    });
    return querySnap;
  },
  async resetPassword(context, email) {
    try {
      const response = await sendPasswordResetEmail(auth, email);

      return response;
    } catch (e) {}
  },
  async login({ commit, dispatch }, data) {
    try {
      const { email, password } = data;

      // Sign in the user
      const response = await signInWithEmailAndPassword(auth, email, password);

      // Commit the user to the Vuex store
      commit("SET_USER", auth.currentUser);

      console.log("User logged in successfully:", auth.currentUser);

      // Optionally fetch additional user info after login
      await dispatch("getUserInfo");

      return response; // Return response for further handling if needed
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Rethrow the error for handling in the calling component
    }
  },

  async logout({ commit }) {
    const response = await signOut(auth).then(() => {
      commit("CLEAR_USER");
    });
    return response;
  },
  async sendEmail() {
    const response = await sendEmailVerification(auth.currentUser);

    return response;
  },
  async register({ dispatch }, data) {
    try {
      const {
        email,
        password,
        surname,
        firstName,
        address,
        contactNumber,
        type,
      } = data;

      let infoPers = {
        email: email,
        firstName: firstName,
        surname: surname,
        address: address,
        contactNumber: contactNumber,
        type: type,
      };

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(async () => {
        await setDoc(doc(db, "users", auth.currentUser.uid), infoPers);
        dispatch("sendEmail");
      });

      return response;
    } catch (e) {}
  },
  fetchUser({ commit, dispatch }) {
    auth.onAuthStateChanged(async (user) => {
      if (user === null) {
        commit("CLEAR_USER");
      } else if (user && user.emailVerified) {
        dispatch("getUserInfo");
        commit("SET_USER", user);
        if (router.isReady() && router.currentRoute.value.path == "/login") {
          router.push("/");
        }
      } else {
        if (router.isReady()) {
          router.push("/login");
        }
      }
    });
  },
};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
