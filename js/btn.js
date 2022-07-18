const btnMobile = document.getElementById('b-mobile');

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('Inter-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('Inter-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('Inter-label', 'Abrir Menu');
  }
}
