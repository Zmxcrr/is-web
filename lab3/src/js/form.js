try {
    const validatorFooter = new JustValidate(".footer__form");

    validatorFooter
        .addField(
            "#footer-email",
            [
                {
                    rule: "required",
                    errorMessage: "E-mail is required",
                },
                {
                    rule: "email",
                    errorMessage: "Enter a valid e-mail",
                },
            ],
            {
                errorsContainer: document
                    .querySelector("#footer-email")
                    .parentElement.querySelector(".email-error-message"),
            }
        )
        .addField(
            "#footer-checkbox",
            [
                {
                    rule: "required",
                    errorMessage: "You must agree to the terms",
                },
            ],
            {
                errorsContainer: document
                    .querySelector("#footer-checkbox")
                    .parentElement.parentElement.querySelector(".check-error-message"),
            }
        )
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch("https://httpbin.org/post", {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Success", data);
                    form.reset();
                });
        });
} catch (e) {}

try {
    const validatorFooter = new JustValidate(".form__main");

    validatorFooter
        .addField(
            "#name",
            [
                {
                    rule: 'required',
                    errorMessage: 'Name is required',
                },
                {
                    rule: 'minLength',
                    value: 3,
                    errorMessage: 'Name must be at least 3 characters',
                },
            ],
            {
                errorsContainer: document
                    .querySelector("#name")
                    .parentElement.querySelector(".name-error"),
            }
        )
        .addField(
            '#email',
            [
                {
                    rule: 'required',
                    errorMessage: 'Email is required',
                },
                {
                    rule: 'email',
                    errorMessage: 'Enter a valid email address',
                },
            ],
            {
                errorsContainer: document
                    .querySelector('.email-error'),
            })
        .addField(
            '#question',
            [
                {
                    rule: 'required',
                    errorMessage: "Question must not be empty"
                },
            ],
                {
                    errorsContainer: document
                        .querySelector('.question-error'),
                }
                )
        .addField(
            '#checkbox',
            [
            {
                rule: 'required',
                errorMessage: 'You must agree to the terms',
            },
        ], {
            errorsContainer: document.querySelector('.terms-error'),
        })
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch("https://httpbin.org/post", {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Success", data);
                    form.reset();
                });
        });
} catch (e) {}