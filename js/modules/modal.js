const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      width: 100vw;
      height: 100vh;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  },
};

export const modalControl = (btn, modal) => {
  const openModal = () => {
    modal.classList.add('modal__open');
    scrollController.disabledScroll();
  };

  const closeModal = () => {
    modal.classList.remove('modal__open');
    scrollController.enabledScroll();
  };

  btn.addEventListener('click', openModal);

  modal.addEventListener('click', ({ target }) => {
    if (target.closest('.form__btn_close') || target === modal) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};
