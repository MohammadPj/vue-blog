<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <div v-if="auth.isLogin">
          <div>
            <v-textarea
              v-model="comment"
              hide-details
              variant="outlined"
              placeholder="Write a comment..."
            ></v-textarea>

            <div
              class="w-100 d-flex justify-space-between bg-grey-lighten-2 pa-2 rounded-b"
            >
              <v-spacer />

              <v-btn
                :loading="commentIsLoading"
                variant="flat"
                color="success"
                @click="handleAddComment"
                >Post Comment</v-btn
              >
            </div>
          </div>

          <CommentList />

        </div>

        <div v-else>you should login for post comment</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  addArticleCommentUseMutation,
} from "@/services/api/articles";

import { useRoute } from "vue-router";
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useQueryClient } from "@tanstack/vue-query";
import CommentList from "@/components/articles/single-article/components/single-article-comment/CommentList.vue";

const route = useRoute();
const auth = useAuthStore();
const queryClient = useQueryClient();

const { mutate: mutateAddArticleComment, isLoading: commentIsLoading } =
  addArticleCommentUseMutation(route.params.title as string);

const comment = ref("");

const handleAddComment = () => {
  const body = { comment: { body: comment.value } };

  mutateAddArticleComment(body, {
    onSuccess: (data) => {
      console.log("data", data);
      queryClient.refetchQueries({ queryKey: ["comments"] });
    },
  });
};

</script>

<style scoped></style>
