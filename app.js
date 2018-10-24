import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldIcon} from '@material/textfield/icon';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import {MDCRipple} from '@material/ripple';
import {MDCCheckbox} from '@material/checkbox';

const topAppBarEl = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarEl);

const textFieldEl = document.querySelector('.mdc-text-field');
const textfield = new MDCTextField(textFieldEl);

//const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));
const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

const checkboxes = [];
document.querySelectorAll('.mdc-checkbox').forEach(function(checkboxEl) {
  const checkbox = new MDCCheckbox(checkboxEl);
  checkboxes.push(checkbox);
})