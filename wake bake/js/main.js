// ----------------------бургер-меню

(function(){

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
    
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }
  }
})()

// ---------------------модалка

const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.about__img-button')

modalBtn.addEventListener('click', openModal)

function openModal(e) {
  e.preventDefault()
  document.body.classList.toggle('body--opened-modal')
}

modal.addEventListener('click', closeModal)

function closeModal(e) {
  e.preventDefault()
  const target = e.target
  if (target.closest('.modal__cansel') || target.classList.contains('modal'))
    document.body.classList.remove('body--opened-modal')
}

