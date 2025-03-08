import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = props.item

    const $donatValue = document.createElement('b')
    $donatValue.textContent = props.value

    this.$rootElement.appendChild($donatValue)

    const $deleteButton = document.createElement('button')
    $deleteButton.className = 'delete-button'
    $deleteButton.textContent = 'Удалить'

    this.$rootElement.appendChild($deleteButton)
  }

  deleteItemList() {
    // ...
}
}
