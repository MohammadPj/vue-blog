<template>
  <v-card-title :title="title">
    {{ title }}
  </v-card-title>
  <v-card-subtitle :title="description">{{ description }}</v-card-subtitle>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

const { title, description } = defineProps<Props>();
</script>

<style scoped></style>
