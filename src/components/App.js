import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {

  setup(props) {
    this.state = {
      total: 0,
      donates: []
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $amountTitle = document.createElement('h1')
    const $amountWrapper = document.createElement('span')
    $amountWrapper.textContent = this.state.total
    
    $amountTitle.className = 'total-amount'
    $amountTitle.textContent = 'Итого: $'
    $amountTitle.appendChild($amountWrapper)

    this.$rootElement.appendChild($amountTitle)
    
    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    // ...
  }
}

