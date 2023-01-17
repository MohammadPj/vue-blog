<template>
  <main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-row>
            <v-col cols="12" sm="9">
              <v-tabs v-model="tab" color="primary">
                <v-tab v-if="auth.isLogin" :value="1">Your Feed</v-tab>
                <v-tab :value="2">Global Feed</v-tab>
              </v-tabs>

              <template v-if="articles">
                <ArticleList :articles="tab === 1 ? feeds : articles" />
              </template>

              <div v-else>Loading</div>
            </v-col>
            <v-col cols="12" sm="3">
              <Tags />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </main>

</template>

<script setup>
import { ref } from "vue";
import ArticleList from "@/components/home/components/article-list/ArticleList.vue";
import { useArticles, useFeeds } from "@/services/api/articles";
import { useAuthStore } from "@/stores/auth";
import Tags from "@/components/home/components/tags/Tags.vue";
const tab = ref(1);
const auth = useAuthStore();

const { data: articles } = useArticles();
const { data: feeds, isError: feedError, isLoading: feedLoading } = useFeeds();
</script>

<style scoped></style>
