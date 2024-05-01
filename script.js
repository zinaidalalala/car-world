document.addEventListener("DOMContentLoaded", function () {

  // Функция для отображения карточек
  function showCards(cards, min, max) {
    cards.forEach(function (card, index) {
      if (index >= min && index < max) {
        card.classList.add("visible");
      } else {
        card.classList.remove("visible");
      }
    });
  }

  function setupGallery(nextBtn, prevBtn, cards, min, max) {
    // Обработчик события для кнопки "вперед"
    nextBtn.addEventListener('click', function () {
      if (max < cards.length) {
        min++;
        max++;
        showCards(cards, min, max);
      }
    });

    // Обработчик события для кнопки "назад"
    prevBtn.addEventListener('click', function () {
      if (min > 0) {
        min--;
        max--;
        showCards(cards, min, max);
      }
    });
  }


  const blocks = document.querySelectorAll('.popular');

  blocks.forEach(function (block) {
    const productCards = block.querySelectorAll('.product__item');
    const productArrowLeft = block.querySelector('.product__arrow--left');
    const productArrowRight = block.querySelector('.product__arrow--right');

    let productMin = 0;
    let productMax = 4; // Показываем по три карточки за раз



    // Инициализация показа карточек
    showCards(productCards, productMin, productMax);
    setupGallery(productArrowRight, productArrowLeft, productCards, productMin, productMax);

  });

  const previewCards = document.querySelectorAll('.preview__img');
  const previewArrowLeft = document.querySelector('.preview-arrow-left');
  const previewArrowRight = document.querySelector('.preview-arrow-right');

  let previewMin = 0;
  let previewMax = 1;

  showCards(previewCards, previewMin, previewMax);
  setupGallery(previewArrowRight, previewArrowLeft, previewCards, previewMin, previewMax);
});
