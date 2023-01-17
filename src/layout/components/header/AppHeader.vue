<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-row justify="space-between">
          <v-col cols="auto text-h4">
            <span @click="handleClickLogo" class="logo">Logo</span>
          </v-col>
          <v-col cols="auto" class="d-flex">
            <div v-if="!auth.isLogin" class="d-flex">
              <v-btn variant="text" color="primary" @click="handleClickLogin">
                login
              </v-btn>
              <v-btn
                class="ml-3"
                rounded
                color="primary"
                flat
                @click="handleClickSignup"
              >
                signup
              </v-btn>
            </div>

            <div v-else>
              <v-btn
                  class="ml-3"
                  rounded
                  color="primary"
                  flat
                  @click="handleLogout"
              >
                logout
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import {useAuthStore} from "@/stores/auth";
const router = useRouter();
const auth = useAuthStore()

const handleClickLogo = () => {
  router.push("/");
};

const handleClickLogin = () => {
  router.push("/login");
};

const handleClickSignup = () => {
  router.push("/signup");
};

const handleLogout = () => {
  auth.logout()
}
</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>
