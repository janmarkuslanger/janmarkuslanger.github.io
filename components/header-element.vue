<template>
    <header class="header-element">
        <div class="header-element__inside">
            <Logo :cssClasses="'header-element__logo'" />
            <Burger :cssClasses="'header-element__burger'" />
        </div>
    </header>
</template>

<script>

import Logo from '@/components/logo.vue';
import Burger from '@/components/burger.vue';

export default {
    components: {
        Logo,
        Burger,
    },
}
</script>

<style lang="scss">
    .header-element {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: $yellow;
        cursor: pointer;
    }
    .header-element__inside {
        position: relative;
        height: $headerHeightSmall;
    }
    .header-element__logo {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
    }
    .header-element__burger {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }
</style>