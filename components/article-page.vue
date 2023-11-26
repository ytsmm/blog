<script setup lang="ts">
    import { type ArticleItem } from '~/types/items';

    function errorImage(e: Event) {
        (e.target as HTMLImageElement).src = 'https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?w=1380&t=st=1701018271~exp=1701018871~hmac=0145fe307540a3fe2c7452586a82443f40c5fc005cd89415465e46b9e351f122'
}

    const article = inject<ArticleItem>('currentArticle')
</script>

<template>
    <main class="container">
        <h1>{{ article?.title }}</h1>
        <div class="pic">
            <img :src="article?.image" @error="errorImage" alt="image">
        </div>
        <span>About</span>
        <p>{{ article?.description }}</p>
    </main>
</template>

<style scoped lang="scss">

    main {
        padding: 120px 0 80px;

        h1 {
            font-size: 36px;
            margin-bottom: 73px;

            @media (min-width: 1024px) {
                font-size: 84px;
            }
        }

        span {
            display: block;
            margin-bottom: 32px;
        }

        p {
            max-width: 695px;
            font-size: 36px;
            line-height: 124%;
        }

        .pic {
            height: 700px;
            margin-bottom: 80px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

</style>