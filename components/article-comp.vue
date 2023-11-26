<script setup lang="ts">
import {type ArticleItem} from '../types/items'

interface Props {
    item: ArticleItem
  }
  defineProps<Props>()

function errorImage(e: Event) {
    (e.target as HTMLImageElement).src = 'https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?w=1380&t=st=1701018271~exp=1701018871~hmac=0145fe307540a3fe2c7452586a82443f40c5fc005cd89415465e46b9e351f122'
}
</script>

<template>
    <NuxtLink class="article" :to="`/article`">
        <div class="pic">
            <img :src="item.image" alt="image" @error="errorImage">
        </div>
        <p>{{ item.title }}</p>
        <button class="more">Read more</button>
    </NuxtLink>
  </template>

<style scoped lang="scss">
    @import "../assets/styles/colors.scss";

    @keyframes slidein {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateY(-20px);
        }
    }
    .article {
        text-decoration: none;
        max-width: 280px;
        font-size: 20px;
        color: $black-color;
        display: block;
        cursor: pointer;
        transition: transform 0.3s;
        &:hover {
            transform: translateY(-20px);
            .more {
                color: $lilac-color;
            }
        }
        .pic {
            aspect-ratio: 1/1;
            width: 100%;
            margin-bottom: 24px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }    
        .more {
            display: block;
            width: fit-content;
            border: none;
            background: none;
            color: white;
            font-size: 20px;
            margin-top: 12px;
            cursor: pointer;
            text-decoration: none;
            transition: 0.3s;
            border-bottom: 1px solid transparent;
            &:hover {
                border-bottom: 1px solid $lilac-color;
            }
        }
    }
</style>