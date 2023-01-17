<template>
  <div class="position-relative">
    <img
      class="w-100 d-flex image"
      src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      alt="article"
    />

    <InfoBanner
      :favoritesCount="favoritesCount"
      :image="image"
      :createdAt="createdAt"
      :username="username"
      mode="articles"
    />
  </div>
</template>

<script setup lang="ts">
import InfoBanner from "@/components/common/info-banner/InfoBanner.vue";

interface Props {
  image: string;
  favoritesCount: number;
  createdAt: string;
  username: string;
}

const { image, favoritesCount, createdAt, username } = defineProps<Props>();

const handleLike = () => {
  console.log("like");
};
</script>

<style scoped>
.image-bar {
  bottom: 12px;
  right: 12px;
  box-shadow: rgb(0 0 0) 0px -50px 36px -28px inset;
}
.image {
  aspect-ratio: 2;
}
</style>
