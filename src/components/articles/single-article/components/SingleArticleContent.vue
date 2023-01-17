<template>
  <v-container class="v-container mt-4">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <div v-if="isSuccess">
          <p class="text-grey-darken-4" >
            {{ data.article.body }}
          </p>

          <v-row class="mt-4">
            <v-col cols="auto" v-for="tag in data.article.tagList" :key="tag">
              <v-chip variant="outlined">{{tag}}</v-chip>
            </v-col>
          </v-row>
        <v-divider class="my-6"></v-divider>

        </div>

        <div v-else>Loading</div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useArticle } from "@/services/api/articles";
import { useRoute } from "vue-router";

const route = useRoute();

const { data, isSuccess } = useArticle(route.params.title as string);
</script>

<style scoped></style>
