<template>
  <v-container class="mt-8">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <form @submit.prevent="handleLogin" class="d-flex flex-column">
          <p class="text-grey-darken-2 text-h3 text-center mb-2">Login</p>

          <router-link to="/signup">
            <p class="text-green text-body-1 text-center">need an account?</p>
          </router-link>

          <v-text-field
            v-model="loginForm.email"
            hide-details
            variant="outlined"
            class="mt-4"
            label="Email"
          ></v-text-field>

          <v-text-field
            v-model="loginForm.password"
            hide-details
            variant="outlined"
            class="mt-4"
            label="Password"
          ></v-text-field>

          <v-btn class="mt-4" color="success" type="submit">Login</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { loginUseMutation } from "@/services/api/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
import {useAuthStore} from "@/stores/auth";

const loginMutation = loginUseMutation();
const router = useRouter();
const auth = useAuthStore()

const loginForm = ref({
  email: "",
  password: "",
});

const handleLogin = () => {
  loginMutation.mutate(
    { user: loginForm.value },
    {
      onSuccess: (data: any) => {
        auth.login()
        localStorage.setItem("token", data.data.user.token);
        router.back();
      },
      onError: (error: any) => {
        console.log("error", error);
      },
    }
  );
};
</script>

<style scoped></style>
