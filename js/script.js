new fullpage("#fullpage", {
  autoScrolling: true,
});

/*sticky-menu*/

window.addEventListener("scroll", function () {
  let topMenu = document.querySelector(".nav");
  topMenu.classList.toggle("sticky", window.scrollY > 0);
});

/*sliderImg*/
let img = document.querySelectorAll(".img img");
let imgBlock = document.querySelectorAll(".img");
for (let i = 0; i < imgBlock.length; i++) {
  imgBlock[i].addEventListener("click", () => {
    for (let j = 0; j < img.length; j++) {
      imgBlock[j].classList.add("compress");
      imgBlock[j].classList.remove("all");
    }
    imgBlock[i].classList.add("all");
  });
}

function reset_state() {
  let firstImg = document.querySelectorAll(
    ".wedding__sl-content .img:first-child"
  );
  let otherImg = document.querySelectorAll(
    ".wedding__sl-content .img:not(:first-child)"
  );
  for (let i = 0; i < firstImg.length; i++) {
    firstImg[i].classList.remove("compress");
    firstImg[i].classList.add("all");
  }
  for (let i = 0; i < otherImg.length; i++) {
    otherImg[i].classList.remove("all");
    otherImg[i].classList.add("compress");
  }
}
document
  .querySelector(".wedding__sl-info")
  .addEventListener("click", function () {
    reset_state();
  });

document.addEventListener("DOMContentLoaded", () => {
  reset_state();
});

/*sliders*/

$(".wedding__sl").on("init", function (event, slick) {
  var dots = $(".slick-dots li");
  console.log("SRANZAN VEE");
  dots.each(function (k, v) {
    $(this)
      .find("button")
      .addClass("heading" + k);
  });
  var items = slick.$slides;
  items.each(function (k, v) {
    var text = $(this).find("h2").text();
    $(".heading" + k).text(text);
  });
});

$(document).ready(function () {
  $(".wedding__sl").slick({
    slidesToShow: 1,
    asNavFor: ".wedding__sl-info",
    arrows: false,
    dots: true,
    infinite: false,
    speed: 1200,
    focusOnSelect: true,
    draggable: false,
  });
});

$(document).ready(function () {
  $(".wedding__sl-info").slick({
    slidesToShow: 1,
    asNavFor: ".wedding__sl",
    fade: true,
    speed: 1200,
    draggable: false,
    infinite: false,
  });
});

$(document).ready(function () {
  $(".socials__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
  });
});

$(document).ready(function () {
  $(".partners__slider").slick({
    slidesToShow: 1,
    infinite: false,
  });
});

$(document).ready(function () {
  $(".biography__slider").slick({
    slidesToShow: 1,
    infinite: false,
  });
});
