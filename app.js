import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCChipSet} from '@material/chips';
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldIcon} from '@material/textfield/icon';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import {MDCRipple} from '@material/ripple';

const topAppBarEl = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarEl);

const chipSetEl = document.querySelector('.mdc-chip-set');
const chipSet = new MDCChipSet(chipSetEl);

const textFieldEl = document.querySelector('.mdc-text-field');
const textfield = new MDCTextField(textFieldEl);

//const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));
const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));