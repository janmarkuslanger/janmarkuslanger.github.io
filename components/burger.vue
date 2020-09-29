<template>
    <div class="burger" :class="[{'burger--active': isActive}, cssClasses]" @click="">
        <div class="burger__inside">
            <div class="burger__line"></div>
            <div class="burger__line"></div>
            <div class="burger__line"></div>
        </div>
    </div>
</template>

<script>
export default {
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

        &:nth-child(1) {
            width: 75%;
            transform: translateY(-6px);
        }

        &:nth-child(3) {
            transform: translateY(6px);
        }
    }
</style>