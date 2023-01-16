<script setup lang="ts">
import { useArticles } from "@/services/api/articles";

const { data, isError, isLoading } = useArticles();
</script>

<template>
  <main>

    <div>

    </div>
  </main>
</template>
