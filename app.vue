<script setup lang="ts">
import { type ArticleItem, type RouteItem } from './types/items'

  const blog = resolveComponent('blog-comp')
  const article = resolveComponent('article-page')
  const route = useRoute()
  const routes: RouteItem[] = [
  {
    path: "/",
    name: "Home",
    component: blog
  },
  {
    path: '/article',
    name: "article",
    component: article
  }
];

  const currentComponent = computed(() => {
    return routes.find(el => el.path === route.path)?.component
  })

  let showBlog = ref<boolean>(true)
  let currentArticle = ref<ArticleItem>()

  const showArticle = (item: ArticleItem) => {
    showBlog.value = false
    currentArticle.value = item
    console.log(currentArticle.value)
  }
  
  provide('showArticle', showArticle)
  provide('currentArticle', currentArticle)

</script>

<template>
  <header-comp></header-comp>
  <KeepAlive><component :is="currentComponent"></component></KeepAlive>
  <footer-comp></footer-comp>
  </template>

<style lang="scss">
  @import "./assets/fonts/font";
  @import "./assets/styles/colors.scss";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: "TTComons", sans-serif;
    color: $black-color;
  }

  img {
    display: block;
  }

  .container {
    max-width: 90%;
    margin: 0 auto;

    @media (min-width: 1440px) {
      max-width: 1217px;
    }
  }

</style>