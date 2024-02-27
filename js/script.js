import constant from './modules/constants.js';
const { btnModal, modal } = constant;
import './modules/acc.js';
import './modules/burgerMenu.js';
import { modalControl } from './modules/modal.js';

modalControl(btnModal, modal);
