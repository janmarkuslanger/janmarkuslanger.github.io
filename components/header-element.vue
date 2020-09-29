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

    @media only screen and (min-width: $desktop-breakpoint) {
        .header-element__inside {
            width: $desktop-breakpoint - 20px;
            margin: 0 auto;
        }
        .header-element__logo {
            left: 0;
        }
        .header-element__burger {
            right: 0;
        }
    }
</style>