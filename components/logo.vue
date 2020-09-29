<template>
    <a href="/" class="logo" :class="cssClasses">Jan-Markus Langer</a>
</template>

<script>
export default {
    props: {
        cssClasses: {
            type: String,
            default: '',
        },
    }
}
</script>

<style lang="scss">
    .logo {
        color: $white;
        font-weight: 500;
        text-decoration: none;
    }
</style>