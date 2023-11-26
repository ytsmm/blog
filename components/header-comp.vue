<script setup lang="ts">
</script>

<template>
    <header>
        <NuxtLink class="logo" to="/">
            <img src="../assets/icons/logo.svg" alt="logo">
        </NuxtLink>
        <nav>
            <div class="center">
                <NuxtLink :class="'link'" to="/">Works</NuxtLink>
                <NuxtLink :class="'link'" to="/">About</NuxtLink>
            </div>
            <div class="right">
                <button class="lang">
                    <img src="../assets/icons/language.svg" alt="language">
                </button>
                <button class="work">Let's work</button>
            </div>
        </nav>    
    </header>
  </template>

<style scoped lang="scss">
    @import "../assets/styles/mixin.scss";
    @import "../assets/styles/colors.scss";

    header {
        padding: 40px 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (min-width: 1024px) {
            flex-direction: row;
        }
    }

    .logo {
        cursor: pointer;
        margin-bottom: 20px;

        @media (min-width: 768px) {
            margin-bottom: 0;
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;

        .center {
            display: flex;
            flex-direction: column;
            gap: 20px;

            @media (min-width: 768px) {
                flex-direction: row;
                gap: 56px;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            gap: 16px;
            .lang {
                background: none;
                cursor: pointer;
                padding: 10px;
                border-radius: 999px;
                border: 2px solid rgba(0, 0, 0, 0.10);
                width: 52px;
                height: 52px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .work {
                display: flex;
                width: 142px;
                height: 52px;
                align-items: center;
                justify-content: center;
                border-radius: 999px;
                background-color: $black-color;
                border: none;
                cursor: pointer;
                color: $white-color;
                font-size: 20px;
                transition: 0.3s;

                &:hover {
                    background-color: $lilac-color;
                }
            }

            @media (min-width: 768px) {
                flex-direction: row;
            }
        }

        @media (min-width: 768px) {
            flex-direction: row;
            align-items: center;
            gap: 91px;
        }
    }

    .link {
        @include blackLink;
    }
</style>