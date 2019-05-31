import React, {Component} from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {   
          price: 12,
          name:"nike shoe",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7c8p6IOYDlsht40z1LG5GzVk3fJm366U7k69V7n-sX5bJPbq2g"
        },
        {
          price:10,
          name: "black nike shoe",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73e7cxbJdF-HGDymaB-pf4MhtwMFd6YDMEfBpDSwzfn61zsTY5w"
        }
      ]
    }
  }



  render() {
    return (
      <div>
      <Dashboard inventory={this.state.inventory} />
      <Form />
      <Header />
      <Product  inventory={this.state.inventory.name} />
      </div>
    )
  }
 
}

export default App;
