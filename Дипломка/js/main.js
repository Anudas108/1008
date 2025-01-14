// ----------------переключатель темы

const themeToggleButton = document.querySelector('.header__section-button-white');
const themeToggleButton2 = document.querySelector('.header__section-button-black');
const themeToggleButton3 = document.querySelector('.price__section-button-white');
const themeToggleButton4 = document.querySelector('.price__section-button-black');

themeToggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      themeToggleButton.innerText = 'Белый';
      localStorage.setItem('theme', 'light-theme');

      function changeImage(element, newSrc) {
          element.style.opacity = 0; // Скрываем изображение
          setTimeout(() => {
              element.src = newSrc; // Меняем изображение
              element.onload = () => { // Убедитесь, что изображение загружено
                  element.style.opacity = 1; // Показываем изображение
              };
          }, 300);
      }
      changeImage(headerScooter, 'img/scooter/scooter-white.png');
      changeImage(App, 'img/logo/app-store-white.svg');
      changeImage(Google, 'img/logo/google-white.svg');
      changeImage(telefhoneColor, 'img/scooter/security__telefhone1.png');
      changeImage(littleBikeDown, 'img/scooter/scooter-white.png');
  }
});

// themeToggleButton.addEventListener('click', () => {
//   if (document.body.classList.contains('dark-theme'))
//      {
//       document.body.classList.remove('dark-theme');
//       document.body.classList.add('light-theme');
//       themeToggleButton.innerText = 'Белый';
//       localStorage.setItem('theme', 'light-theme');

//       headerScooter.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         headerScooter.src = '../img/scooter/scooter-white.png'; // Меняем изображение
//         headerScooter.style.opacity = 1; // Показываем изображение
//       }, 300);
//       App.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         App.src = '../img/logo/app-store-white.svg'; // Меняем изображение
//         App.style.opacity = 1; // Показываем изображение
//       }, 300);
//       Google.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         Google.src = '../img/logo/google-white.svg'; // Меняем изображение
//         Google.style.opacity = 1; // Показываем изображение
//       }, 300);
//       telefhoneColor.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         telefhoneColor.src = '../img/scooter/security__telefhone1.png'; // Меняем изображение
//         telefhoneColor.style.opacity = 1; // Показываем изображение
//       }, 300);
//       littleBikeDown.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         littleBikeDown.src = '../img/scooter/scooter-white.png'; // Меняем изображение
//         littleBikeDown.style.opacity = 1; // Показываем изображение
//       }, 300);
//   } else return
// })

// themeToggleButton2.addEventListener('click', () => {
//   if (document.body.classList.contains('light-theme'))
//      {
//       document.body.classList.remove('light-theme');
//       document.body.classList.add('dark-theme');
//       themeToggleButton.innerText = 'Белый';
//       localStorage.setItem('theme', 'dark-theme');

//       headerScooter.style.opacity = 0; // Скрываем изображение
//     setTimeout(() => {
//       headerScooter.src = '../img/scooter/scooter-black.png'; // Меняем изображение
//       headerScooter.style.opacity = 0.9; // Показываем изображение
//     }, 300);
//     App.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         App.src = '/img/logo/app-store-black.svg'; // Меняем изображение
//         App.style.opacity = 1; // Показываем изображение
//       }, 300);
//       Google.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         Google.src = '/img/logo/google-black.svg'; // Меняем изображение
//         Google.style.opacity = 1; // Показываем изображение
//       }, 300);
//       telefhoneColor.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         telefhoneColor.src = '/img/scooter/security__telefhone-white.png'; // Меняем изображение
//         telefhoneColor.style.opacity = 1; // Показываем изображение
//       }, 300);
//       littleBikeDown.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         littleBikeDown.src = '/img/scooter/scooter-black.png'; // Меняем изображение
//         littleBikeDown.style.opacity = 1; // Показываем изображение
//       }, 300);
//   } else return
// })

themeToggleButton2.addEventListener('click', () => {
  if (document.body.classList.contains('light-theme')) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      themeToggleButton.innerText = 'Белый';
      localStorage.setItem('theme', 'dark-theme');

      function changeImage(element, newSrc) {
          element.style.opacity = 0; // Скрываем изображение
          setTimeout(() => {
              element.src = newSrc; // Меняем изображение
              element.onload = () => { // Убедитесь, что изображение загружено
                  element.style.opacity = 1; // Показываем изображение
              };
          }, 300);
      }
      changeImage(headerScooter, 'img/scooter/scooter-black.png');
      changeImage(App, 'img/logo/app-store-black.svg');
      changeImage(Google, 'img/logo/google-black.svg');
      changeImage(telefhoneColor, 'img/scooter/security__telefhone-white.png');
      changeImage(littleBikeDown, 'img/scooter/scooter-black.png');
  }
});

themeToggleButton3.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      themeToggleButton.innerText = 'Белый';
      localStorage.setItem('theme', 'light-theme');

      function changeImage(element, newSrc) {
          element.style.opacity = 0; // Скрываем изображение
          setTimeout(() => {
              element.src = newSrc; // Меняем изображение
              element.onload = () => { // Убедитесь, что изображение загружено
                  element.style.opacity = 1; // Показываем изображение
              };
          }, 300);
      }
      changeImage(headerScooter, 'img/scooter/scooter-white.png');
      changeImage(App, 'img/logo/app-store-white.svg');
      changeImage(Google, 'img/logo/google-white.svg');
      changeImage(telefhoneColor, 'img/scooter/security__telefhone1.png');
      changeImage(littleBikeDown, 'img/scooter/scooter-white.png');
  }
});

// themeToggleButton3.addEventListener('click', () => {
//   if (document.body.classList.contains('dark-theme'))
//      {
//       document.body.classList.remove('dark-theme');
//       document.body.classList.add('light-theme');
//       themeToggleButton.innerText = 'Белый';
//       localStorage.setItem('theme', 'light-theme');

//       headerScooter.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         headerScooter.src = '../img/scooter/scooter-white.png'; // Меняем изображение
//         headerScooter.style.opacity = 1; // Показываем изображение
//       }, 300);
//       App.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         App.src = '../img/logo/app-store-white.svg'; // Меняем изображение
//         App.style.opacity = 1; // Показываем изображение
//       }, 300);
//       Google.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         Google.src = '../img/logo/google-white.svg'; // Меняем изображение
//         Google.style.opacity = 1; // Показываем изображение
//       }, 300);
//       telefhoneColor.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         telefhoneColor.src = '../img/scooter/security__telefhone1.png'; // Меняем изображение
//         telefhoneColor.style.opacity = 1; // Показываем изображение
//       }, 300);
//       littleBikeDown.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         littleBikeDown.src = '../img/scooter/scooter-white.png'; // Меняем изображение
//         littleBikeDown.style.opacity = 1; // Показываем изображение
//       }, 300);
//   } else return
// })

themeToggleButton4.addEventListener('click', () => {
  if (document.body.classList.contains('light-theme')) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      themeToggleButton.innerText = 'Белый';
      localStorage.setItem('theme', 'dark-theme');

      function changeImage(element, newSrc) {
          element.style.opacity = 0; // Скрываем изображение
          setTimeout(() => {
              element.src = newSrc; // Меняем изображение
              element.onload = () => { // Убедитесь, что изображение загружено
                  element.style.opacity = 1; // Показываем изображение
              };
          }, 300);
      }
      changeImage(headerScooter, 'img/scooter/scooter-black.png');
      changeImage(App, 'img/logo/app-store-black.svg');
      changeImage(Google, 'img/logo/google-black.svg');
      changeImage(telefhoneColor, 'img/scooter/security__telefhone-white.png');
      changeImage(littleBikeDown, 'img/scooter/scooter-black.png');
  }
});

// themeToggleButton4.addEventListener('click', () => {
//   if (document.body.classList.contains('light-theme'))
//      {
//       document.body.classList.remove('light-theme');
//       document.body.classList.add('dark-theme');
//       themeToggleButton.innerText = 'Белый';
//       localStorage.setItem('theme', 'dark-theme');

//       headerScooter.style.opacity = 0; // Скрываем изображение
//     setTimeout(() => {
//       headerScooter.src = '../img/scooter/scooter-black.png'; // Меняем изображение
//       headerScooter.style.opacity = 0.9; // Показываем изображение
//     }, 300);
//     App.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         App.src = '../img/logo/app-store-black.svg'; // Меняем изображение
//         App.style.opacity = 1; // Показываем изображение
//       }, 300);
//       Google.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         Google.src = '../img/logo/google-black.svg'; // Меняем изображение
//         Google.style.opacity = 1; // Показываем изображение
//       }, 300);
//       telefhoneColor.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         telefhoneColor.src = '../img/scooter/security__telefhone-white.png'; // Меняем изображение
//         telefhoneColor.style.opacity = 1; // Показываем изображение
//       }, 300);
//       littleBikeDown.style.opacity = 0; // Скрываем изображение
//       setTimeout(() => {
//         littleBikeDown.src = '../img/scooter/scooter-black.png'; // Меняем изображение
//         littleBikeDown.style.opacity = 1; // Показываем изображение
//       }, 300);
//   } else return
// })

// ---------------------------------------бургер меню

const burgerMenu = document.querySelector('.header__top-burger');
const nav = document.querySelector('.nav');
const body = document.body;
const navLinks = document.querySelectorAll('.nav__link');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('burger-active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('noScroll');
});

navLinks.forEach(link => {  // Обрабатываем клик по каждой ссылке
  link.addEventListener('click', (event) => {
      event.preventDefault(); // Отменяем стандартное поведение ссылки (переход по якорю)

      const targetId = link.getAttribute('href'); // Получаем ID секции из атрибута href ссылки
      console.log(targetId);
       nav.classList.remove('burger-active'); // Закрываем меню
      burgerMenu.classList.remove('active');
      body.classList.remove('noScroll');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
         targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавно прокручиваем страницу к секции
      }
  });
});

// ------------------------------------интерактивный список номер один

const items = document.querySelectorAll('.list');
const firstItem = items[0];

// Подсвечиваем первый элемент при загрузке
firstItem.classList.add('about-list');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        firstItem.classList.remove('about-list'); // Убираем подсветку с первого элемента
        item.classList.add('about-list'); // Подсвечиваем текущий элемент
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('about-list'); // Убираем подсветку с текущего элемента
        firstItem.classList.add('about-list'); // Возвращаем подсветку на первый элемент
    });
});

// ------------------------------------интерактивный список номер два

const items2 = document.querySelectorAll('.list2');
const firstItem2 = items2[0];

// Подсвечиваем первый элемент при загрузке
firstItem2.classList.add('security-list');

items2.forEach(item => {
    item.addEventListener('mouseenter', () => {
        firstItem2.classList.remove('security-list'); // Убираем подсветку с первого элемента
        item.classList.add('security-list'); // Подсвечиваем текущий элемент
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('security-list'); // Убираем подсветку с текущего элемента
        firstItem2.classList.add('security-list'); // Возвращаем подсветку на первый элемент
    });
});

// ---------------------------------слайдер с отзывами

const slides = document.querySelectorAll('.feedback__slide-content');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentSlide = 0;

function getSlideWidth() {
    if (window.innerWidth <= 320) {
        return 114;
    } else if (window.innerWidth <= 400) {
        return 104;
    } else if (window.innerWidth <= 500) {
        return 90;
    } else if (window.innerWidth <= 600) {
        return 97;
    } else if (window.innerWidth <= 700) {
        return 85;
    } else if (window.innerWidth <= 800) {
        return 73;
    } else if (window.innerWidth <= 1000) {
        return 56;
    } else if (window.innerWidth <= 1200) {
        return 46;
    } else {
        return 43; // Пример: 43% для экранов больше 1200px
    }
}

function updateSlidePosition() {
    const slidesContainer = document.querySelector('.feedback__slide');
    const slideWidth = getSlideWidth();
    slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
}

nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Циклический переход
    }
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1; // Циклический переход
    }
    updateSlidePosition();
});

// Обновляем положение слайдов при изменении размера окна
window.addEventListener('resize', updateSlidePosition);
