let registrationForm = document.getElementById('registration_form');
let passwordValidator = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;

let formData;

if (registrationForm) {
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let firstName = document.getElementById('name').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let number = document.getElementById('number').value;
        let city = document.getElementById('city').value;

        formData = {
            firstName, lastName, email, password, number, city
        };

        saveFormData(formData);


    })
};

let msg = document.querySelector(".register_msg");

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    //ensures that the storage saves only unique emails
    let email = formData.email;
    let alreadyIncludes = storedFormData.filter(item => item.email === email);
    if (alreadyIncludes.length > 0) {
        msg.innerHTML = "Account already exists, please log in";
        msg.classList.remove("hidden");
        msg.style.color = "red";
        registrationForm.reset();
    } else if (passwordValidator.test(formData.password) === false) {
        msg.innerHTML = "password must include one uppercase letter one symbol and the length must be min 6 characters."
        msg.classList.remove("hidden");
        msg.style.color = "red";
        registrationForm.reset();
    } else {
        storedFormData.push(formData);
        msg.innerHTML = "Sign up successful";
        msg.classList.remove("hidden");
        msg.style.color = "green";
        localStorage.setItem('formData', JSON.stringify(storedFormData));
        window.location.href = "login.html";
    }

}
