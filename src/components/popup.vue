<template>
    <div class="popup">
        <div class="popup__overlay"></div>
        <div class="popup__block">
            <h2>{{ text }}</h2>
            <slot name="btn"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popup",
        props: {
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="sass" scoped>
    .popup
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 10

        &__overlay
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            background-color: rgba(0,0,0, .6)
            z-index: 1

        &__block
            position: absolute
            top: 50%
            left: 50%
            min-width: 300px
            padding: 20px
            text-align: center
            background-color: #ffffff
            border-radius: 10px
            transform: translate(-50%, -50%)
            z-index: 2

            & a
                text-decoration: none
</style>
