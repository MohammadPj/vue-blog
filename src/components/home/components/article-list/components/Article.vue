<template>
  <router-link :to="`/article/${article.slug}`" >
    <v-card class="pb-2">
      <ArticleHeader
        :image="article.author.image"
        :username="article.author.username"
        :createdAt="article.createdAt"
        :favoritesCount="article.favoritesCount"
      />

      <ArticleBody :description="article.description" :title="article.title" />
    </v-card>
  </router-link>
</template>

<script setup lang="ts">
import type { IArticle } from "@/services/api/articles/api";
import ArticleHeader from "@/components/home/components/article-list/components/components/ArticleHeader.vue";
import ArticleBody from "@/components/home/components/article-list/components/components/ArticleBody.vue";

interface Props {
  article: IArticle;
}

const { article } = defineProps<Props>();
</script>

<style scoped></style>
