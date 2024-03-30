let burgerIcon = document.getElementById("burger_icon");
let burgerMenu = document.getElementById("burger_menu");

burgerIcon.addEventListener("click", () => {
    if (burgerMenu.classList.contains("show")) {
        burgerMenu.classList.remove("show")
    } else {
        burgerMenu.classList.add("show")
    }

})

