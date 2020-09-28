<template>
    <div class="text-element">

        <h1 v-if="title && h1" class="text-element__title">{{ title }}</h1>
        <h3 v-if="title && !h1" class="text-element__title">{{ title }}</h3>

        <slot></slot>

    </div>
</template>

<script>
export default {
    props: {
        h1: {
            type: Boolean,
            default: false,
        },
        title: String
    }
}
</script>

<style lang="scss" scoped>
    .text-element__title {
        font-size: 20px;
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 20px;
    }

    @media only screen and (min-width: $desktop-breakpoint) {

    }
</style>