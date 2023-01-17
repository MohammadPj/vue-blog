<template>
  <div v-if="isSuccess">
    <div
        v-for="comment in comments.comments"
        :key="comment.id"
    >
      <Comment :comment="comment" />
    </div>
  </div>
</template>

<script setup lang="ts">

import { useArticleComments} from "@/services/api/articles";
import {useRoute} from "vue-router";
import Comment from "@/components/articles/single-article/components/single-article-comment/Comment.vue";

const route = useRoute();

const { data: comments, isSuccess } = useArticleComments(
    route.params.title as string
);

</script>

<style scoped>

</style>