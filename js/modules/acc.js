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
  button.addEventListener('click', () => {
    for (let i = 0; i < items.length; i += 1) {
      if (ind === i) {
        textWrapper[i].style.height = textWrapper[i].classList.contains(
          'item_active',
        )
          ? ''
          : `${heghtWrapper}px`;
        items[i].classList.add('item_active');
      } else {
        items[i].classList.remove('item_active');
        textWrapper[i].style.height = '';
      }
    }
  });
});
