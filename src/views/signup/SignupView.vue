<template>
  <v-container class="mt-8">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <form @submit.prevent="handleSignup" class="d-flex flex-column">
          <p class="text-grey-darken-2 text-h3 text-center mb-2">Sign Up</p>

          <router-link to="/login">
            <p class="text-green text-body-1 text-center">have an account?</p>
          </router-link>

          <v-text-field
            v-model="signupForm.username"
            hide-details
            variant="outlined"
            class="mt-4"
            label="username"
          ></v-text-field>

          <v-text-field
            v-model="signupForm.email"
            hide-details
            variant="outlined"
            class="mt-4"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="signupForm.password"
            hide-details
            variant="outlined"
            class="mt-4"
            label="Password"
          ></v-text-field>

          <v-btn class="mt-4" color="success" type="submit">Signup</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { signupUseMutation } from "@/services/api/auth";
import { useRouter } from "vue-router";
import {useAuthStore} from "@/stores/auth";

const signupMutation = signupUseMutation();
const router = useRouter();
const auth = useAuthStore()

const signupForm = ref({
  username: "",
  email: "",
  password: "",
});

const handleSignup = () => {
  signupMutation.mutate(
    { user: signupForm.value },
    {
      onSuccess: (data: any) => {
        localStorage.setItem("token", data.user.token);
        auth.login()
        router.back()
      },
      onError: (error: any) => {
        console.log('error', error)
      }
    }
  );
};
</script>

<style scoped></style>
