<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'add' }">Добавление</router-link> |
      <router-link :to="{ name: 'edit' }">Редактирование</router-link>
    </div>
    <div class="container">
      <router-view/>
      <h1>1 ЧАС</h1>
    </div>
  </div>
</template>

<style lang="sass">
  *
    box-sizing: border-box
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0

  input[type=number]
    -moz-appearance: textfield

  input
    &::-webkit-input-placeholder
      color: #C7CAC9

    &::-moz-placeholder
      color: #C7CAC9

    &:-ms-input-placeholder
      color: #C7CAC9

    &:-moz-placeholder
      color: #C7CAC9

  .flex
    display: flex

  .jcsb
    justify-content: space-between

  .fdc
    flex-direction: column

  .aic
    align-items: center

  .aifs
    align-items: flex-start

  .mt20
    margin-top: 20px

  .mt40
    margin-top: 40px

  .fs16
    font-size: 16px!important

  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50

  #nav
    padding: 30px

    a
      font-weight: bold
      color: #2c3e50

      &.router-link-exact-active
        color: #42b983

  .container
    width: 670px
    margin: 0 auto


    .cards
      position: relative
      display: flex
      justify-content: space-between
      margin: 7px 0 75px

      &__left
        position: relative
        width: 500px
        height: 320px
        padding: 30px 40px 40px
        background-color: #333333
        z-index: 2

        & p
          margin: 0
          font-weight: 300
          font-size: 21px
          color: #FFFFFF

        & .dates-slash
          margin: 21px 7px 0
          color: #FFFFFF

      &__right
        position: absolute
        top: 40px
        right: 0
        width: 500px
        height: 320px
        background-color: #4F4F4F
        z-index: 1

        &-line
          width: 100%
          height: 90px
          margin-top: 60px
          background-color: #828282

        &-input
          width: 110px
          margin: 24px 30px 0 auto

          & input
            width: 110px!important

    .logo-block
      display: flex
      align-items: center
      justify-content: space-evenly
      width: 500px
      margin-left: auto

    .checkbox
      display: flex
      margin-top: 45px
      text-align: left
      font-weight: 300
      font-size: 16px
      color: #333333

      & input
        margin-right: 20px

    .total
      display: flex
      align-items: center
      justify-content: space-between
      width: 100%
      margin-top: 40px
      padding: 30px
      background: #FFFFFF
      box-shadow: 0 6px 12px rgba(3, 154, 114, 0.24)

      &__price
        display: flex
        flex-direction: column
        align-items: flex-start

        & p
          margin: 0 0 10px
          font-weight: 300
          font-size: 21px
          color: #333333

        &-num
          font-weight: bold
          font-size: 36px
          color: #4F4F4F

        &-text
          font-weight: 300
          font-size: 14px
          color: #333333

      &__btn
        width: 295px
        height: 50px
        background: #000000
        border: 1px solid #2F80ED
        font-weight: 300
        font-size: 16px
        color: #FFFFFF
        outline: none
        cursor: pointer

        &.disabled
          background-color: rgba(151,135,146,0.95)

  .dates
    width: 50px
    & input
      width: 50px!important
      padding: 10px!important
      text-align: center
</style>
