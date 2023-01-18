<template>
  <v-row class="w-100 mt-5">
    <v-col
      cols="12"
      sm="6"
      v-for="article in articles.articles"
      :key="article.slug"
    >
      <Article :article="article" />
    </v-col>

    <p v-if="!articles.articles.length">there isn't any feed</p>
  </v-row>
</template>

<script setup lang="ts">
import Article from "@/components/home/components/article-list/components/Article.vue";
import type { IArticle } from "@/services/api/articles/types";

interface Props {
  articles: {
    articles: IArticle[]
  };
}

const { articles } = defineProps<Props>();
</script>

<style scoped></style>
