<template>
  <main>
    <SingleArticleHeader />
    <SingleArticleContent />
    <SingleArticleComment />
  </main>
</template>

<script setup lang="ts">
import SingleArticleHeader from "@/components/articles/single-article/components/SingleArticleHeader.vue";
import SingleArticleContent from "@/components/articles/single-article/components/SingleArticleContent.vue";
import SingleArticleComment from "@/components/articles/single-article/components/single-article-comment/SingleArticleComment.vue";
</script>

<style scoped></style>
