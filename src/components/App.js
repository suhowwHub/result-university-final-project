import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {

  setup() {
    this.state = {
      total: 0,
      donates: []
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const amountTitle = document.createElement('h1')
    const amountWrapper = document.createElement('span')
    amountWrapper.textContent = this.state.total

    this.$title = amountWrapper
    
    amountTitle.className = 'total-amount'
    amountTitle.textContent = 'Итого: $'
    amountTitle.appendChild(amountWrapper)

    this.$rootElement.appendChild(amountTitle)
    
    const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);

    this.$donateList = donateList
  }
  
  onItemCreate(amount) {
    const item = new ListItem({ 
      amount: amount,
      deleteItem: this.onItemDelete.bind(this)
     })

    this.state.donates.push(item)

    this.$donateList.addItem(item)
    this.state.total += Number(amount)
    this.$title.textContent = this.state.total
    }

  onItemDelete(item) { 
    const deletedElem = this.state.donates.find(donat => donat.state.id === Number(item.id))
    this.state.total -= Number(deletedElem.state.amount)
    this.$title.textContent = this.state.total

    const updatedStateDonates = this.state.donates.filter(donat => donat.state.id !== Number(item.id))
    this.state.donates = updatedStateDonates

    item.remove()
  }
}

