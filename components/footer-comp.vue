<script setup lang="ts">

</script>

<template>
    <footer>
        <div class="container">
            <span class="project">Is there a project?</span>
            <div class="top">
                <p>Let's work together</p>
                <div class="info">
                    <div class="contacts">
                        <span>For all questions</span>
                        <a href="tel:+79202780068">+7 (920) 278—00—68</a>
                        <a href="mailto:qtim@agency.com">qtim@agency.com</a>
                    </div>
                    <location-comp>Office in Russia</location-comp>
                    <location-comp>Office in Dubai</location-comp>
                </div>
            </div>
            <div class="bottom">
                <div class="link-block">
                    <NuxtLink class="link" to="/facebook">Facebook</NuxtLink>    
                    <NuxtLink class="link" to="/instagram">Instagram</NuxtLink>  
                    <NuxtLink class="link" to="/telegram">Telegram</NuxtLink>  
                </div>
                <button><span>Go</span></button>
                <div class="link-block">
                    <NuxtLink class="link" to="/facebook">Behance</NuxtLink>  
                    <NuxtLink class="link" to="/facebook">Linkedn</NuxtLink>  
                    <NuxtLink class="link" to="/facebook">Privacy Policy</NuxtLink>  
                </div>
            </div>
        </div>    
    </footer>
  </template>

<style scoped lang="scss">
    @import "../assets/styles/mixin.scss";
    @import "../assets/styles/colors.scss";

    footer {
        padding: 60px 0;
        background: $lilac-color;

        @media (min-width: 1024px) {
            padding-top: 140px;
            padding-bottom: 0;
        }
    }

    .project {
        display: inline-block;
        margin-bottom: 56px;
    }

    .top {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin-bottom: 143px;

        & > p {
            font-size: 36px;
            max-width: 500px;

            @media (min-width: 1024px) {
                font-size: 80px;
            }
        }

        @media (min-width: 1024px) {
            flex-direction: row;
            gap: 368px;
        }
    }

    .info {
        display: grid;
        gap: 36px;
    }

    .contacts {
        span {
            display: block;
            margin-bottom: 12px;
        }

        a {
            display: block;
            text-decoration: none;
            color: $black-color;

            &:first-of-type {
                margin-bottom: 4px;
            }
        }
    }

    .bottom {
        display: flex;
        flex-direction: column;
        gap: 32px;

        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
        }
        

        .link {
            @include blackLink;
            
            @media (min-width: 1024px) {
                margin-bottom: 30px;
            }
        }

        button {
            display: none;
            
            @media (min-width: 1024px) {
                display: flex;
                width: 358px;
                height: 179px;
                align-items: flex-end;
                justify-content: center;
                border: none;
                border-top-right-radius: 179px;
                border-top-left-radius: 179px;
                background-color: $black-color;
                cursor: pointer;
            }

            span {
                margin-bottom: 25px;
                color: $white-color;
                font-size: 32px;
            }
        }
    }

    .link-block {
        display: flex;
        flex-direction: column;
        gap: 32px;

        @media (min-width: 1024px) {
            flex-direction: row;
        }
    }

</style>