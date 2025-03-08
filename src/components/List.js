import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const listTitle = document.createElement('h2')
    listTitle.className = 'donates-container__title'
    listTitle.textContent = 'Список донатов'

    const listItemsWrapper = document.createElement('div')
    listItemsWrapper.className = 'donates-container__donates'

    this.$listItemsWrapper = listItemsWrapper

    this.$rootElement.appendChild(listTitle)
    this.$rootElement.appendChild(listItemsWrapper)
  }

  addItem(item) {
    this.$listItemsWrapper.appendChild(item.$rootElement)
  }
}