<template>
  <v-tabs v-model="tab" color="primary">
    <v-tab v-if="isLogin" :value="1">Your Feed</v-tab>
    <v-tab :value="2">Global Feed</v-tab>
  </v-tabs>

  <ArticleList />
</template>

<script setup>
import { ref, watch } from "vue";
import ArticleList from "@/components/home/components/article-list/ArticleList.vue";
const tab = ref(1);
const isLogin = ref(true);

watch(tab, (value, oldValue) => {});
</script>

<style scoped></style>