<template>
  <header class="header bg-grey-darken-3 py-4" >
    <v-container v-if="isSuccess">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <h1 class="mb-4">{{ data.article.title }}</h1>

          <InfoBanner
            mode="singleArticle"
            :image="data.article.author.image"
            :favoritesCount="data.article.favoritesCount"
            :createdAt="data.article.createdAt"
            :username="data.article.author.username"
            :following="data.article.author.following"
          />
        </v-col>
      </v-row>
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
  color: #f8f8f8;
}
</style>
