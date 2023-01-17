<template>
  <v-row v-if="data" class="w-100 mt-5">
    <v-col cols="12" sm="6" v-for="article in data.articles" :key="article.id">
      <Article :article="article" />
    </v-col>
  </v-row>
</template>

<script setup>
import Article from "@/components/home/components/article-list/components/Article.vue";
import { useArticles } from "@/services/api/articles";

const { data, isError, isLoading } = useArticles();

// const articles = ref([{}]);
</script>

<style scoped></style>
