let payment = ({
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
                this.nameValid = 'Только латинские буквы';
            } else if (!this.formData.name.match(/^[A-Z][a-z]+ [A-Z][a-z]+$/)) {
                this.nameValid = 'Только латинские буквы';
            } else {
                this.nameValid = '';
            }
            if(this.formData.date_month > 12) {
                this.monthValid = 'Не больше 12';
            } else {
                this.monthValid = '';
            }
            if(this.formData.cvccvv.length < 3 || this.formData.cvccvv.length > 4) {
                this.cvccvvValid = '3 или 4 цифры';
            } else {
                this.cvccvvValid = '';
            }
            if(this.formData.price != '' && this.formData.number.length === 19 && this.formData.name != '' && this.formData.date_month != '' && this.formData.date_year != '' && this.formData.cvccvvValid != '' && this.formData.check === true) {
                this.disabled = false;
            }
        }
    }
});

export default payment;
