<template>
    <section class="article-element">
        <div class="article-element__inside">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .article-element__inside {
        padding: 40px 20px;
    }

    @media only screen and (min-width: $desktop-breakpoint) {

        .article-element__inside {
            width: $desktop-breakpoint - 20px;
            margin: 0 auto;
            padding: 240px 0;
        }

    }
</style>