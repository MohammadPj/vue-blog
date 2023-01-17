<template>
  <div class="bg-grey-lighten-2 pa-4 rounded">
    <span>Popular Tags</span>
    <v-row v-if="tags" class="mt-4">
      <v-col cols="auto" v-for="tag in tags.tags" :key="tag" class="pa-1">
        <v-chip link>{{ tag }}</v-chip>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useTags } from "@/services/api/articles";

const { data: tags } = useTags();
</script>

<style scoped></style>
