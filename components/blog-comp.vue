<script setup lang="ts">

import { type ArticleItem, type PageItem } from '../types/items'

const API: string = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'
const pages = ref<PageItem>({number: [], data: []})
let currentPage = ref<number>(1)

function getJson<T>(url: string): Promise<T> {
  return fetch(url)
    .then(result => result.json())
    .catch(error => {
      console.log(error)
    })
}

onMounted(() => {
  getJson(API)
    .then(res => {
      for (let i: number = 0, j: number = 1; i < (res as ArticleItem[]).length; i += 8, j++) {
        pages.value.number.push(j)
        pages.value.data.push((res as ArticleItem[]).slice(i, i + 8))
      }
    })
})

const page = computed<ArticleItem[]>(() => pages.value.data[currentPage.value-1])

const prevSlide = () => {
  if (!(currentPage.value === 1)) {
    currentPage.value--
    }   
}

const nextSlide = () => {
  if (!(currentPage.value === pages.value.data.length)) {
    currentPage.value++ 
    }   
}

const changePage = (number: number) => {
    currentPage.value = number
}

const pagination = computed(() => {
  if (pages.value.number.length - 5 >= currentPage.value) {
    return pages.value.number.slice(currentPage.value - 1, currentPage.value + 4)
  } else {
    return pages.value.number.slice(pages.value.number.length - 5, pages.value.number.length)
  }
})
</script>

<template>
    <main class="container">
        <h1 class="title">Articles</h1>
        <div class="blog">
            <blog-page :items="page"></blog-page>
        </div>
        <div class="pagination">
            <button class="prev" @click="prevSlide">   
                <img src="../assets/icons/next.svg" alt="next">
            </button>
            <button v-for="page in pagination"
                @click="changePage(page)" 
                class="page-btn" 
                :class="{active: currentPage === page}"
            >
                {{ page }}
            </button>
            <button class="next" @click="nextSlide">   
                <img src="../assets/icons/next.svg" alt="next">
            </button>
        </div>
  </main>
</template>

<style scoped lang="scss">
 @import "./assets/styles/colors.scss";
  main {
    display: grid;
    gap: 50px;
    padding: 120px 0 140px;
  }
  
  .title {
    font-size: 84px;
  }

  .active {
    background-color: $black-color;
    color: $white-color;
  }

  .pagination {
    display: flex;
    gap: 8px;
  }
  .page-btn {
    display: block;
    width: 44px;
    height: 44px;
    cursor: pointer;
    border-radius: 12px;
    border: none;
    background-color: $light-grey-color;
    color: $black-color;
    transition: 0.3s;
    &:hover {
      background-color: $grey-color;
    }
  }
  .next, .prev {
    display: flex;
    width: 44px;
    height: 44px;
    cursor: pointer;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    border: 1px solid $grey-color;
    background: $white-color;
    transition: 0.3s;
    &:hover {
        background: $grey-color;
    }
  }

  .prev {
    img {
      transform: rotate(180deg);
    }
  }

  .active {
    color: $white-color;
    background-color: $black-color;
  }
</style>