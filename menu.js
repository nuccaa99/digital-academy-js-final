const apiKey = 'c4d37e31e0704fe68acbeda0d076c5fe';
const baseUrl = 'https://api.spoonacular.com/';
const endpoint = 'food/menuItems/search';

const number = 10;
let query;

let coffeeBtn = document.getElementById("coffee_btn");
let sandwichBtn = document.getElementById("sandwich_btn");
let empanadaBtn = document.getElementById("empanada_btn");
let dessertBtn = document.getElementById("dessert_btn");
let menuTypeTitle = document.getElementById("menu_item_type");


async function fetchMenuItems(query) {
    const url = `${baseUrl}${endpoint}?apiKey=${apiKey}&query=${query}&number=${number}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        data.menuItems.forEach((item, index) => {
            let menuItem = document.getElementById(`menu_item${index}`);
            menuItem.innerText = `${item.title}`;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function loadMenuItems(query) {
    menuTypeTitle.innerText = `${query.toUpperCase()}`;
    fetchMenuItems(query);
}

window.onload = function () {
    loadMenuItems("coffee");
};

coffeeBtn.addEventListener("click", () => {
    loadMenuItems("coffee");
});

sandwichBtn.addEventListener("click", () => {
    loadMenuItems("sandwich");
});

empanadaBtn.addEventListener("click", () => {
    loadMenuItems("empanada");
});

dessertBtn.addEventListener("click", () => {
    loadMenuItems("dessert");
});


//filter

function searchProduct() {
    let searchPhrase = document.getElementById("searchInput").value.toUpperCase();
    let menuItems = document.querySelectorAll(".menu_item")
    menuItems.forEach((item) => {
        if (item.innerText.toUpperCase().indexOf(searchPhrase) > -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}