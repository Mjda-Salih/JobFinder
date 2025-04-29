export default {
  SET_USER(state, data) {
    console.log("SET_USER mutation triggered with data:", data); // Debug log
    state.user = data;
    console.log("Updated state.user:", state.user); // Confirm updated state
  },
  SET_USER_INFO(state, data) {
    console.log("SET_USER_INFO mutation triggered with data:", data); // Debug log
    state.userInfo = data;
    console.log("Updated state.userInfo:", state.userInfo); // Confirm updated state
  },
  CLEAR_USER(state) {
    console.log("CLEAR_USER mutation triggered"); // Debug log
    state.user = null;
    state.userInfo = null;
    console.log(
      "Cleared state.user and state.userInfo:",
      state.user,
      state.userInfo
    ); // Confirm cleared state
  },
};
