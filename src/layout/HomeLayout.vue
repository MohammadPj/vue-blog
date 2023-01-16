<script setup lang="ts">
import AppHeader from "@/layout/components/header/AppHeader.vue"

</script>

<template>
  <div class="d-flex flex-column fill-height">
    <AppHeader />
    <v-main class="flex-grow-1">
      <router-view></router-view>
    </v-main>
    <footer>footer</footer>
  </div>
</template>
