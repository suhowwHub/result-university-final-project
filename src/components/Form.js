import { Component } from '../core/Component';

export class Form extends Component {

  get isValid () {
    if (/^(100|[1-9][0-9]?|0?[1-9])$/.test(this.state.amount)) return true
    else return false
  }

  setup(props) {
    this.state = {
      amount: ''
    }

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))


    const inputLabel = document.createElement('label')
    inputLabel.className = 'donate-form__input-label'
    inputLabel.textContent = 'Введите сумму в $'

    const input = document.createElement('input')
    input.className = 'donate-form__donate-input'
    input.name = 'amount'
    input.type = 'number'
    input.max = '100'
    input.min = '1'
    input.required = true
    input.placeholder = 'От 1 до 100 долларов'

    this.$input = input

    this.$input.addEventListener('input', this.handleInput.bind(this))

    inputLabel.appendChild(input)

    this.$rootElement.appendChild(inputLabel)

    const submitButton = document.createElement('button')
    submitButton.className = 'donate-form__submit-button'
    submitButton.type = 'submit'
    submitButton.disabled = true
    submitButton.textContent = 'Задонатить'

    this.$button = submitButton

    this.$rootElement.appendChild(submitButton)
  }

  handleInput(event) {

    this.state.amount = event.target.value

    this.$button.disabled = this.isValid ? false : true
  }

  handleSubmit(event) {
    event.preventDefault()
    
    const onItemCreate = this.props.onSubmit
    onItemCreate(this.$input.value)
  }
}
