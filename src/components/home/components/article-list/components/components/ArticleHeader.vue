<template>
  <div class="position-relative">
    <img
      class="w-100 d-flex image"
      src="@/assets/image/image-1.jpg"
      alt="article"
    />

    <InfoBanner
      :favoritesCount="favoritesCount"
      :image="image"
      :createdAt="createdAt"
      :username="username"
      mode="articles"
      :slug="slug"

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
  slug: string
}

const { image, favoritesCount, createdAt, username, slug } = defineProps<Props>();

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
