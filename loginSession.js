let loginBtn = document.getElementById("login_btn");
let loginBtnLink = document.getElementById("login_btn_link");
let reserveBtn = document.getElementById("reserve_btn");

let currentLogin = JSON.parse(sessionStorage.getItem('currentLogin'));

if (currentLogin) {
    loginBtn.innerHTML = "Log out";
    loginBtn.addEventListener("click", () => {
        sessionStorage.clear();
        loginBtnLink.href = "index.html"
    })
} else {
    loginBtn.innerHTML = "Log in"
}

if (reserveBtn) {
    reserveBtn.addEventListener("click", () => {
        if (currentLogin) {
            reserveBtn.href = "reservation.html";
        } else {
            reserveBtn.href = "login.html"
        }
    })
}