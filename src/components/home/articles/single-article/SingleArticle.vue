<template>
  <main>
    <SingleArticleHeader />
    <v-container>

    </v-container>
  </main>
</template>

<script setup lang="ts">
import { useArticle } from "@/services/api/articles";
import { useRoute } from "vue-router";
import SingleArticleHeader from "@/components/home/articles/single-article/components/SingleArticleHeader.vue";
const route = useRoute();

const { data } = useArticle(route.params.title as string);
</script>

<style scoped>
.header {
}
</style>
