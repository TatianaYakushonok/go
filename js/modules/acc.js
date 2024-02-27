const items = document.querySelectorAll('.faq__item');
const buttons = document.querySelectorAll('.faq__item-title');
const textWrapper = document.querySelectorAll('.faq__text-wrapper');

let heghtWrapper = 0;

textWrapper.forEach((elem) => {
  if (heghtWrapper < elem.scrollHeight) {
    heghtWrapper = elem.scrollHeight;
  }
});

buttons.forEach((button, ind) => {
  button.addEventListener('click', ({ target }) => {
    console.log(target === button);
    for (let i = 0; i < items.length; i += 1) {
      if (ind === i && target === button) {
        textWrapper[i].style.height = items[i].classList.contains('item_active')
          ? ''
          : `${heghtWrapper}px`;
        items[i].classList.toggle('item_active');
      } else {
        items[i].classList.remove('item_active');
        textWrapper[i].style.height = '';
      }
    }
  });
});
