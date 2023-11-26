<script setup lang="ts">

import { type ArticleItem } from '../types/items'

  interface Props {
      items: ArticleItem[]
    }
  defineProps<Props>()

  const showArticle = inject<void>('showArticle')
</script>

<template>
    <div class="articles">
        <article-comp @click="showArticle(item)" v-for="item in items" :item="item"></article-comp>
    </div>
  </template>

<style scoped lang="scss">

  .articles {
    display: grid;
    gap: 44px 32px;
    justify-content: center;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(auto, 280px));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(auto, 280px));
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(4, minmax(auto, 280px));
    }
  }

</style>