import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    render() {
        return (
            <div id="Dash">
                
                {this.props.inventory.map((item, index) => (
                    <Product key={index} inventory={this.props.inventory} item={item} 
                    componentDidMount={this.componentDidMount}/>
                ))}
                
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard;