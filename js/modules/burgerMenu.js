// Burger menu
const getBurgerMenu = () => {
  const menu = document.querySelector('.nav');
  const burger = document.querySelector('.header__burger');
  const navLink = document.querySelectorAll('.nav__link');
  const headerBtns = document.querySelectorAll('.header__btn');
  const overlay = document.querySelector('.header__menu-overlay');

  const toggleBurgerMenu = () => {
    burger.classList.toggle('close');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');

    if (burger.classList.contains('close')) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  };

  burger.addEventListener('click', () => {
    requestAnimationFrame(toggleBurgerMenu);
  });
  overlay.addEventListener('click', () => {
    requestAnimationFrame(toggleBurgerMenu);
  });
  navLink.forEach((link) => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        burger.classList.remove('close');
        overlay.classList.remove('active');
        document.body.style.overflowY = 'scroll';
      }
    });
  });
  headerBtns.forEach((headerBtn) => {
    headerBtn.addEventListener('click', () => {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        burger.classList.remove('close');
        overlay.classList.remove('active');
      }
    });
  });
};

getBurgerMenu();
