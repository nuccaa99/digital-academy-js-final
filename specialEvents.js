
let slides = document.querySelectorAll(".special_events_slider_img");
let index = 0;

document.querySelector(".fa-chevron-left").addEventListener("click", () => {
    showSlidesManual(-1)
})
document.querySelector(".fa-chevron-right").addEventListener("click", () => {
    showSlidesManual(1)
})

function showSlidesManual(n) {
    index = index + n;

    if (index >= slides.length) {
        index = 0;

    } else if (index < 0) {
        index = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "block";

}

setInterval(() => {
    showSlidesManual(1);
}, 5000);

showSlidesManual(0)


