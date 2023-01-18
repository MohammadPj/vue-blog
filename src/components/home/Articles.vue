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
                <v-pagination
                  v-if="articles.articlesCount > 10"
                  v-model="page"
                  class="my-4"
                  :length="Math.ceil(articles.articlesCount / 10)"
                  :total-visible="6"
                ></v-pagination>
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

<script setup lang="ts">
import { ref, watch } from "vue";
import ArticleList from "@/components/home/components/article-list/ArticleList.vue";
import { useArticles, useFeeds } from "@/services/api/articles";
import { useAuthStore } from "@/stores/auth";
import Tags from "@/components/home/components/tags/Tags.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const auth = useAuthStore();
const tab = ref(2);
const page = ref(route?.query?.page ? +route?.query?.page : 1);
const tag = ref(route?.query?.tag);

const { data: articles } = useArticles(page, tag);
const { data: feeds } = useFeeds();

watch(route, () => {
  tag.value = route.query.tag;
  page.value = route?.query?.page ? +route?.query?.page : 1;
});

watch(page, (value) => {
  router.push({ query: { ...route.query, page: value } });
});
</script>

<style scoped></style>
