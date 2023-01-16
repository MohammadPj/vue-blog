<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="auto text-h4">
        <span @click="handleClickLogo" class="logo">Logo</span>
      </v-col>
      <v-col cols="auto" class="d-flex">
        <div class="d-flex">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const handleClickLogo = () => {
  router.push("/");
};

const handleClickLogin = () => {
  router.push("/login")
}

const handleClickSignup = () => {
  router.push("/signup")
}

</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>
