<script setup lang="ts">

</script>

<template>
    <div class="location">
        <span><slot></slot></span>
        <span class="address">139 Ruben Station Lake Drew, NM 52678</span>
        <button><img src="../assets/icons/location.svg" alt="location"></button>
    </div>
</template>

<style scoped lang="scss">
    @import "../assets/styles/colors.scss";

    .location {
        max-width: 152px;

        span {
            display: inline-block;
        }

        button {
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            border-radius: 999px;
            background-color: $black-color;
            cursor: pointer;
        }
    }

    .address {
        margin-top: 12px;
        margin-bottom: 8px;
    }

</style>