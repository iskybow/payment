<template>
    <div>
        <form action="" @submit="addCard">
            <app-input inputClass="price" type="number" placeholder="Сумма" name="price" v-model="formData.price">
                <span class="prefix" slot="prefix">€</span>
                <span class="valid-text" slot="valid">{{ priceValid }}</span>
            </app-input>
            <div class="cards">
                <div class="cards__left">
                    <div class="flex jcsb aic">
                        <p>Paying: € {{ formData.price }}</p>
                        <img src="../assets/visa.png" alt="">
                    </div>
                    <app-input class="mt40" type="text" placeholder="0000 – 0000 – 0000 – 0000" label="Card Number" name="number" @keyPress="validCard" @changeInput="valid" v-model="formData.number">
                        <span class="valid-text" slot="valid">{{ numberValid }}</span>
                    </app-input>
                    <div class="flex jcsb aic mt20">
                        <app-input type="text" placeholder="Michael Nagarov" label="Card Holder" name="name" @changeInput="valid" v-model="formData.name">
                            <span class="valid-text" slot="valid">{{ nameValid }}</span>
                        </app-input>
                        <div class="flex fdc aifs">
                            <p class="fs16">Expiration date</p>
                            <div class="flex">
                                <app-input class="dates" type="text" placeholder="01" name="date_month" @changeInput="valid" v-model="formData.date_month">
                                    <span class="valid-text" slot="valid">{{ monthValid }}</span>
                                </app-input>
                                <span class="dates-slash">/</span>
                                <app-input class="dates" type="text" placeholder="24" name="date_year" @changeInput="valid" v-model="formData.date_year">
                                    <span class="valid-text" slot="valid">{{ yearValid }}</span>
                                </app-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cards__right">
                    <div class="cards__right-line"></div>
                    <app-input class="cards__right-input" type="number" placeholder="***" label="CVC/CVV" name="cvccvv" @changeInput="valid" v-model="formData.cvccvv">
                        <span class="valid-text cvccvv-valid" slot="valid">{{ cvccvvValid }}</span>
                        <span class="description" slot="description">Last 3 or 4 digits</span>
                    </app-input>
                </div>
            </div>
            <div class="logo-block">
                <img src="../assets/logo1.png" alt="">
                <img src="../assets/logo2.png" alt="">
                <img src="../assets/logo3.png" alt="">
            </div>
            <label for="check" class="checkbox">
                <input type="checkbox" id="check" name="check" @change="valid" v-model="formData.check">
                Привяжите карту для быстрого пополнения баланса по SMS, USSD и подключения автоплатежей
            </label>
            <div class="total">
                <div class="total__price">
                    <p>Итого к зачеслению</p>
                    <span class="total__price-num">€ {{ formData.price }}</span>
                    <span class="total__price-text">Без комиссии</span>
                </div>
                <button class="total__btn" type="submit" :disabled="disabled" :class="{ disabled: disabled }">Оплатить</button>
            </div>
        </form>
        <popup v-show="popupFlag" text="Оплата принята">
            <router-link :to="{name: 'edit'}" slot="btn">Редактирование</router-link>
        </popup>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                formData: {
                    price: '',
                    number: '',
                    name: '',
                    date_month: '',
                    date_year: '',
                    date: '',
                    cvccvv: '',
                    check: false
                },
                maxYear: 0,
                nameValid: '',
                monthValid: '',
                yearValid: '',
                cvccvvValid: '',
                numberValid: '',
                priceValid: '',
                disabled: true,
                popupFlag: false
            }
        },
        mounted() {
            let now = new Date();
            let year = now.getFullYear();
            this.maxYear = (year-(year%Math.pow(10, 2)))/Math.pow(10, 2);
        },
        methods: {
            validCard(event) {
                let m = this.formData.number.length;

                if (m > 18 || event.keyCode < 48 || event.keyCode > 57)
                    event.returnValue= false;

                else if (m == 4 || m == 9 || m == 14)
                    this.formData.number += '-';
            },
            valid() {
                if(this.formData.price.length < 1) {
                    this.priceValid = 'Поле обязательно для заполнения';
                } else {
                    this.priceValid = '';
                }
                if(this.formData.number.length < 19) {
                    this.numberValid = 'Неверный номер карты';
                } else {
                    this.numberValid = '';
                }
                if(this.formData.name.match(/[0-9]/)) {
                    this.nameValid = 'Только буквы';
                } else {
                    this.nameValid = '';
                }
                if(this.formData.date_month > 12) {
                    this.monthValid = 'Не больше 12';
                } else {
                    this.monthValid = '';
                }
                if(this.formData.date_year > this.maxYear) {
                    this.yearValid = 'Не больше ' + this.maxYear;
                } else {
                    this.yearValid = '';
                }
                if(this.formData.cvccvv.length < 3 || this.formData.cvccvv.length > 4) {
                    this.cvccvvValid = '3 или 4 цифры';
                } else {
                    this.cvccvvValid = '';
                }
                if(this.formData.price != '' && this.formData.number.length === 19 && this.formData.name != '' && this.formData.date_month != '' && this.formData.date_year != '' && this.formData.cvccvvValid != '' && this.formData.check === true) {
                    this.disabled = false;
                }
            },
            addCard(e) {
                e.preventDefault();
                this.formData.date = '01.' + this.formData.date_month + '/' + this.formData.date_year;
                setTimeout(() => {
                    this.popupFlag = true;
                }, 2000)
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>
