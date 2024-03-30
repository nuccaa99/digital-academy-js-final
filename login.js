
let msg = document.querySelector(".login_msg");
let form = document.getElementById("login_form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = document.getElementById('email_login').value;
        let password = document.getElementById('password_login').value;

        let currentLogin = {
            email, password
        }

        let storedData = JSON.parse(localStorage.getItem('formData'));

        if (storedData && email && password) {
            if (storedData.filter(item => item.email === email && item.password === password).length > 0) {
                window.location.href = "index.html";

                sessionStorage.setItem('currentLogin', JSON.stringify(currentLogin));

            } else if (storedData.filter(item => item.email === email).length > 0) {
                msg.innerHTML = "Incorrect password";
                msg.classList.remove("hidden");
                msg.style.color = "red";
                form.reset();
            } else {
                msg.innerHTML = "You are not registered, please sign up";
                msg.classList.remove("hidden");
                msg.style.color = "red";
                form.reset();
            }
        } else {
            msg.innerHTML = "You are not registered, please sign up";
            msg.classList.remove("hidden");
            msg.style.color = "red";
            form.reset();
        }

    })
}