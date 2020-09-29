<template>
    <div class="burger" :class="cssClasses" @click="isActive = !isActive">
        <div class="burger__inside">
            <div class="burger__line" :class="{'burger__line--active': isActive}"></div>
            <div class="burger__line" :class="{'burger__line--active': isActive}"></div>
            <div class="burger__line" :class="{'burger__line--active': isActive}"></div>
        </div>
    </div>
</template>

<script>
export default {
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

    @media only screen and (min-width: $desktop-breakpoint) {
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