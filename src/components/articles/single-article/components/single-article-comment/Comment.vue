<template>
  <div class="border mt-2 rounded">
    <p class="border-b pa-4">{{ comment.body }}</p>

    <div
        class="d-flex justify-space-between pa-2 align-center bg-grey"
    >
      <p class="text-body-2">
        {{ comment.author.username }}
        {{
          new Date(comment.createdAt).toLocaleString("en-US", {
            dateStyle: "long",
          })
        }}
      </p>
      <v-btn
          icon
          size="small"
          variant="text"
          @click="handleDeleteComment(comment.id)"
          :loading="deleteIsLoading"
      >
        <v-icon icon="mdi-delete" color="grey-darken-4"></v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">

import {deleteArticleCommentUseMutation} from "@/services/api/articles";
import {useRoute} from "vue-router";
import {useQueryClient} from "@tanstack/vue-query";
import { IComment} from "@/services/api/articles/api";

const route = useRoute();
const queryClient = useQueryClient();

interface Props {
  comment: IComment;
}

const { comment } = defineProps<Props>();

const { mutate: mutateDeleteArticleComment, isLoading: deleteIsLoading } =
    deleteArticleCommentUseMutation(route.params.title as string);

const handleDeleteComment = (id: string) => {
  mutateDeleteArticleComment(id, {
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["comments"] });
    },
  });
};


</script>

<style scoped>

</style>