// heart

let hearts = document.querySelectorAll(".heart");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("orange-heart");
  });
}

let burger = document.querySelector(".burger__btn");
let menubox = document.querySelector(".menubox");
let page = document.querySelector(".page");

burger.addEventListener("click", function () {
  if (menubox.style.visibility === "hidden") {
    menubox.style.visibility = "visible";
    menubox.style.left = "0";
    page.style.marginLeft = "253px";
  } else {
    menubox.style.visibility = "hidden";
    menubox.style.left = "-100%";
    burger.style.left = "0";
    page.style.marginLeft = "0";
  }
});

let promotions = document.querySelectorAll(".promotion");
let hero = document.querySelector(".radio-wrapper");
let radioButtonsHero = hero.querySelectorAll(".radio__input");

let goods = document.querySelector(".goods");
let goodsCards = goods.querySelectorAll(".product__item");
let radioButtonsGoods = goods.querySelectorAll(".radio__input");

let offers = document.querySelector(".offers");
let offersCards = offers.querySelectorAll(".product__item");
let radioButtonsOffers = offers.querySelectorAll(".radio__input");

let preview = document.querySelector(".preview");
let previewCards = preview.querySelectorAll(".preview__img");
let radioButtonsPreview = preview.querySelectorAll(".radio__input");


function handleRadioButtons(cards, radioButtons, displayValue) {
  radioButtons.forEach(function (btn, index) {
    btn.addEventListener("change", function () {
      if (this.checked) {
        cards.forEach(function (card, cardIndex) {
          card.style.display = index === cardIndex ? displayValue : "none";
        });
      }
    });
  });
}

handleRadioButtons(promotions, radioButtonsHero, "block");
handleRadioButtons(goodsCards, radioButtonsGoods, "flex");
handleRadioButtons(offersCards, radioButtonsOffers, "flex");
handleRadioButtons(previewCards, radioButtonsPreview, "flex");


// очищаем поле ввода в строке поиска

let searchBtn = document.querySelector('.search__button');
let searchInput = document.querySelector('.search__input');

searchBtn.onclick = function () {
  searchInput.value = '';
}
