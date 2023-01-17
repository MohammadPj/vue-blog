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

      <v-btn @click.stop.prevent variant="flat" color="white"
        >Like
        <v-icon class="ml-2" color="grey" icon="mdi-thumb-up"></v-icon>
        <span class="ml-1">{{ favoritesCount }}</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
interface Props {
  image: string;
  favoritesCount: number;
  createdAt: string;
  username: string;
  mode: "articles" | "singleArticle";
  following?: boolean;
}

const {
  image,
  favoritesCount,
  createdAt,
  username,
  following,
  mode = "articles",
} = defineProps<Props>();

console.log("mode", mode);
</script>

<style scoped></style>
