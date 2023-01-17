import { ref } from "vue";
import { defineStore } from "pinia";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const isLogin = ref(!!localStorage.getItem('token'));
  console.log('isLogin', isLogin.value)

  function login() {
    isLogin.value = true
  }

  const logout = () => {
    isLogin.value = false
    console.log('isLogin.value', isLogin.value)
    localStorage.removeItem('token')
  }

  return { login, logout, isLogin };
});
