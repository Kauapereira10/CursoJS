export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const email = this.form.querySelector('input[name="email"]');
        const password = this.form.querySelector('input[name="password"]');
        const errorMsg = this.form.querySelector(".form-error");

        if (!email.value || !password.value) {
            errorMsg.innerText = "Por favor, preencha todos os campos.";
            return;
        }

        errorMsg.innerText = "";
        this.form.submit();
    }
}
