<template>
  <v-row
    justify="space-between"
    :class="` ${
      mode === 'articles' ? 'position-absolute' : ''
    }  image-bar w-100`"
  >
    <v-col cols="auto">
      <div class="d-flex align-center">
        <v-avatar size="40">
          <img width="40" :src="image" alt="author" />
        </v-avatar>

        <div class="ml-2">
          <p class="text-green text-body-2">
            {{ username }}
          </p>

          <p class="text-caption text-grey-lighten-2 font-weight-light">
            {{
              new Date(createdAt).toLocaleDateString("en-US", {
                dateStyle: "long",
              })
            }}
          </p>
        </div>
      </div>
    </v-col>

    <v-col cols="auto" class="d-flex align-center">
      <v-btn
        v-if="mode === 'singleArticle'"
        variant="outlined"
        color="white"
        class="mr-4"
      >
        {{ following ? "unfollow" : "follow" }} {{ username }}
      </v-btn>

      <v-btn
        @click.stop.prevent="handleLike"
        :loading="isLoading"
        variant="flat"
        color="white"
        >Like
        <v-icon class="ml-2" color="grey" icon="mdi-thumb-up"></v-icon>
        <span class="ml-1">{{ favoritesCount }}</span>
      </v-btn>

      <v-snackbar v-model="snackbarStore.snackbar.show">
        {{ snackbarStore.snackbar.text }}

        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbarStore.setSnackbar({ show: false })"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { likeArticleUseMutation } from "@/services/api/articles";
import { useQueryClient } from "@tanstack/vue-query";
import { useSnackbarStore } from "@/stores/snackbar";

interface Props {
  image: string;
  favoritesCount: number;
  createdAt: string;
  username: string;
  mode: "articles" | "singleArticle";
  following?: boolean;
  slug?: string;
}

const {
  image,
  favoritesCount,
  createdAt,
  username,
  following,
  slug,
  mode = "articles",
} = defineProps<Props>();

const queryClient = useQueryClient();
const snackbarStore = useSnackbarStore();

const { mutate: mutateLikeArticle, isLoading } = likeArticleUseMutation(
  slug as string
);

const handleLike = () => {
  mutateLikeArticle(undefined, {
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["articles"] });
    },
    onError: (error: any) => {
      console.log("error", error.response.data.message);
      snackbarStore.setSnackbar({
        show: true,
        text: error.response.data.message,
      });
    },
  });
};
</script>

<style scoped></style>
