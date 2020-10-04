<template>
    <header class="header-element">
        <div class="header-element__inside">
            <Logo :cssClasses="'header-element__logo'" />
            
            <div class="burger header-element__burger" :class="cssClasses" @click="onBurgerClick">
                <div class="burger__inside">
                    <div class="burger__line" :class="{'burger__line--active': isActive}"></div>
                    <div class="burger__line" :class="{'burger__line--active': isActive}"></div>
                    <div class="burger__line" :class="{'burger__line--active': isActive}"></div>
                </div>
            </div>

            <transition name="navigation--slide" v-on:before-leave="beforeNavigationSlide" v-on:after-enter="afterNavigationSlide">
                <nav class="navigation" v-if="isActive">
                    <div class="navigation__inside">
                        <ul class="navigation__links">
                            <transition  name="navigation__item--slide">
                                <li v-if="isLinkActive" class="navigation__item"><nuxt-link class="navigation__link" to="/projects">Projects</nuxt-link></li>
                            </transition>
                            <transition  name="navigation__item--slide" v-on:after-leave="afterNavigationLinkLeave">
                                <li v-if="isLinkActive" class="navigation__item"><nuxt-link class="navigation__link" to="/contact">Contact</nuxt-link></li>
                            </transition>
                        </ul>
                    </div>
                </nav>
            </transition>

        </div>
    </header>
</template>

<script>

import Logo from '@/components/logo.vue';

export default {
    components: {
        Logo,
    },
    methods: {
        onBurgerClick: function(el) {
            if (this.isActive) {
                this.isLinkActive = false;
                return;
            }

            this.isActive = true;
        },
        afterNavigationSlide: function(el) {
            this.isLinkActive = true;
        },
        afterNavigationLinkLeave: function(el) {
            this.isActive = false;
        },
    },
    data: function() {
        return {
            isActive: false,
            isLinkActive: false,
        };
    },
    props: {
        cssClasses: {
            type: String,
            default: '',
        },
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
        z-index: 1;
    }
    .header-element__burger {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }

    .burger {
        width: 40px;
        height: 40px;
        cursor: pointer;
        z-index: 1;
    }
    .burger__inside {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 2px;
        transform: translate(-50%, -50%);
    }
    .burger__line {
        position: absolute;
        background-color: $white;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: width 0.3s linear, transform $cubiz .8s;

        &:nth-child(1) {
            width: 75%;
            transform: translateY(-6px);
        }

        &:nth-child(3) {
            transform: translateY(6px);
        }

        &--active {
            &:nth-child(1) {
                width: 0;
            }

            &:nth-child(2) {
                transform: rotate(45deg);
            }   

            &:nth-child(3) {
                transform: translateY(0) rotate(-45deg);
            }   
        }
    }

    .navigation {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: $black;
        z-index: 0;
    }

    .navigation--slide-enter-active, .navigation--slide-leave-active {
        transition: transform .5s;
    }
    .navigation--slide-enter, .navigation--slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: translateX(-100%);
    }

    .navigation__inside {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: $headerHeightSmall 20px;
    }

    .navigation__links {
        list-style: none;
    }

    .navigation__item {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .navigation__link {
        color: $white;
        text-decoration: none;
    }

    .navigation__item--slide-enter-active, .navigation__item--slide-leave-active {
        transition: transform .5s, opacity .5s;
    }
    .navigation__item--slide-enter, .navigation__item--slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: translateX(100%);
        opacity: 0;
    }

    @media only screen and (min-width: $desktop-breakpoint) {
        .header-element__inside {
            width: $desktop-breakpoint - 20px;
            margin: 0 auto;
            height: $headerHeightLarge;
        }
        .header-element__logo {
            left: 0;
        }
        .header-element__burger {
            right: 0;
        }

        .burger__inside {
            width: 30px;
            height: 3px;
        }

        .burger__line {
            &:nth-child(1) {
                transform: translateY(-10px);
            }

            &:nth-child(3) {
                transform: translateY(10px);
            }

            &--active {
                &:nth-child(1) {
                    width: 0;
                }

                &:nth-child(2) {
                    transform: rotate(45deg);
                }   

                &:nth-child(3) {
                    transform: translateY(0) rotate(-45deg);
                }   
            }
        }

        .navigation__inside {
            width: $desktop-breakpoint - 20px;
            left: 50%;
            transform: translateX(-50%);
            padding-left: 0;
            padding-right: 0;
        }

        .navigation__item {
            margin-bottom: 40px;
        }

        .navigation__link {
            font-size: 30px;
        }
    }
</style>