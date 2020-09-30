<template>
    <header class="header-element">
        <div class="header-element__inside">
            <Logo :cssClasses="'header-element__logo'" />
            
            <div class="burger header-element__burger" :class="cssClasses" @click="isActive = !isActive">
                <div class="burger__inside">
                    <div class="burger__line" :class="{'burger__line--active': isActive}"></div>
                    <div class="burger__line" :class="{'burger__line--active': isActive}"></div>
                    <div class="burger__line" :class="{'burger__line--active': isActive}"></div>
                </div>
            </div>

            <nav class="navigation" :class="{'navigation--active': isActive}">
                <div class="navigation__inside">
                    <ul class="navigation__links">
                        <li class="navigation__item"><nuxt-link class="navigation__link" to="/projects">Projects</nuxt-link></li>
                        <li class="navigation__item"><nuxt-link class="navigation__link" to="/contact">Contact</nuxt-link></li>
                    </ul>
                </div>
            </nav>

        </div>
    </header>
</template>

<script>

import Logo from '@/components/logo.vue';
import Navigation from '@/components/navigation.vue';

export default {
    components: {
        Logo,
        Navigation,
    },
    data: function() {
        return {
            isActive: false,
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
        display: none;
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
    }
</style>