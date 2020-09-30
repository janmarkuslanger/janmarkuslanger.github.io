<template>
    <nav class="navigation" :class="{'navigation--active': isActive}">
        <div class="navigation__inside">

            <ul class="navigation__links">

                <li class="navigation__item"><nuxt-link class="navigation__link" to="/projects">Projects<nuxt-link></li>
                <li class="navigation__item"><nuxt-link class="navigation__link" to="/contact">Contact<nuxt-link></li>

            </ul>

        </div>
    </nav>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">

</style>