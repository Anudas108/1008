// ----------------переключатель темы

const themeToggleButton = document.querySelector('.header__section-button-white');
const themeToggleButton2 = document.querySelector('.header__section-button-black');

themeToggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme'))
     {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      themeToggleButton.innerText = 'Белый';
      localStorage.setItem('theme', 'light-theme');
  } else return
})

themeToggleButton2.addEventListener('click', () => {
  if (document.body.classList.contains('light-theme'))
     {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      themeToggleButton.innerText = 'Белый';
      localStorage.setItem('theme', 'dark-theme');
  } else return
})


