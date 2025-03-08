import { Component } from '../core/Component';
import { DeleteButton } from './DeleteButton';

export class Form extends Component {
  setup(props) {
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $inputLabel = document.createElement('label')
    $inputLabel.className = 'donate-form__input-label'
    $inputLabel.textContent = 'Введите сумму в $'

    const $input = document.createElement('input')
    $input.className = 'donate-form__donate-input'
    $input.name = 'amount'
    $input.type = 'number'
    $input.max = '100'
    $input.min = '1'
    $input.required = true

    this.$input = $input

    $inputLabel.appendChild($input)

    this.$rootElement.appendChild($inputLabel)

    const $submitButton = document.createElement('button')
    $submitButton.className = 'donate-form__submit-button'
    $submitButton.type = 'submit'
    $submitButton.disabled = true
    $submitButton.textContent = 'Задонатить'

    this.$button = $submitButton

    this.$rootElement.appendChild($submitButton)
  }

  handleInput(event) {
    // ...
  }

  handleSubmit(event) {
    // ...
  }
}
