<template>
  <header class="header bg-grey-darken-3">
    <v-container v-if="isSuccess">
      <h1 class="mb-4">{{ data.article.title }}</h1>

      <InfoBanner
        mode="singleArticle"
        :image="data.article.author.image"
        :favoritesCount="data.article.favoritesCount"
        :createdAt="data.article.createdAt"
        :username="data.article.author.username"
        :following="data.article.author.following"
      />
    </v-container>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useArticle } from "@/services/api/articles";
import InfoBanner from "@/components/common/info-banner/InfoBanner.vue";

const route = useRoute();

const { data, isSuccess } = useArticle(route.params.title as string);
</script>

<style scoped>
.header {
  background: #2c3e50;
  color: #f8f8f8;
}
</style>
