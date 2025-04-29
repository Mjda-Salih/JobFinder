import { reactive } from "vue";

export const EventBus = reactive({
  events: {},
  emit(eventName, data) {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach((callback) => callback(data));
  },
  on(eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
  },
});
