import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            price: 0,
            imgurl: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.baseState = this.state
    }
    handleChange(e) {
        this.setState({[e.target.image]: e.target.value});
    }
    resetForm = () => {
        this.setState(this.baseState)
        console.log(this.baseState)
    }


    render() {
        return (
            <div id="Container">
                <form onInput={(e)=> {
                e.preventDefault()
            }}>
                <input className="Input" name="image" onChange={this.handleChange} />
                <input className="Input" name="name" onChange={this.handleChange}/>
                <input className="Input" name="price" onChange={this.handleChange}/>
                </form>
                <div onSubmit={(e) => {
                    e.preventDefault()
                }}>
                <button onClick={this.resetForm}>Cancel</button>
                <button>Add to inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;