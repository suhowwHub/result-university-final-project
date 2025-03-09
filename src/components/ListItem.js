import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = `${this.state.date.toLocaleDateString().replaceAll('.', '/')}, ${this.state.date.toLocaleTimeString()}`
    this.$rootElement.id = this.state.id

    const donatValue = document.createElement('b')
    donatValue.textContent = `\u00A0- $${this.state.amount}`

    this.$rootElement.appendChild(donatValue)

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.textContent = 'Удалить'
    deleteButton.addEventListener('click', this.deleteItemList.bind(this))

    this.$rootElement.appendChild(deleteButton)
  }

  deleteItemList(event) {
    const target = event.target
    const item = target.closest('.donate-item')

    const onItemDelete = this.props.deleteItem
    onItemDelete(item)
}
}
