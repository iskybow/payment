<template>
    <label class="app-input">
        <slot name="prefix"></slot>{{ label }}
        <input :type="type"
               :name="name"
               :placeholder="placeholder"
               :class="inputClass"
               :value="value"
               :required="required"
               @input="change($event)"
               @keypress="keyPressEvent"
        >
        <slot name="valid"></slot>
        <slot name="description"></slot>
    </label>
</template>

<script>
    export default {
        name: "appInput",
        props: {
            label: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: [Number, String]
            },
            required: {
                type: Boolean,
                default: false
            },
            inputClass: {
                type: String,
                default: ''
            }
        },

        methods: {
            change(event) {
                this.$emit('input', event.target.value);
                this.$emit('changeInput', event.target.value);
                this.$emit('changeInputCard', event);
            },
            keyPressEvent(event) {
                this.$emit('keyPress', event);
            }
        }
    }
</script>

<style lang="sass" scoped>
    .app-input
        position: relative
        display: flex
        flex-direction: column
        justify-content: center
        align-items: flex-start
        font-weight: 300
        font-size: 16px
        color: #FFFFFF

        & input
            width: 280px
            margin-top: 10px
            padding: 10px 30px 10px 10px
            color: #000000

        & .prefix
            position: absolute
            left: 10px
            color: #000000

            & ~ input
                margin-top: 0
                padding-left: 25px
                border: 1px solid #000000
                box-shadow: inset 0px -1px 0px #D0ECEA

        & .description
            margin-top: 10px
            font-size: 14px
            color: #8E8E8E

        & .valid-text
            position: absolute
            top: 100%
            left: 5px
            font-size: 11px
            color: #ff0008

        & .cvccvv-valid
            top: 72%
</style>
