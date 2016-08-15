import React from 'react'
const Registration = React.createClass({
  getInitialState:function (){
    return {
     name: '',
     description:'',
     price:''
    }
  },

  onInputChange: function(event){
    this.setState({name:event.target.value});
 
  },
  onInputChangeDesc: function(event){
    this.setState({description:event.target.value});

  },
  OnInputChangeProduct: function(event){
    this.setState({price:event.target.value});
  },
  addProduct: function() {
    var url = "/productorganizer/"
    fetch(url,
    {
      method: "POST",
      headers:{  "Content-type": "application/json"  },
      body:JSON.stringify(this.state)
    })
    console.log("this.state:", this.state)

  },

  render(){
    console.log('Registration');
    return (
      <div> 
        
          <li><input type="text" value ={this.state.name} placeholder = "Name" onChange = {this.onInputChange}/></li>
          <li><input type="text" value ={this.state.product}placeholder = "Product" onChange = {this.onInputChangeProduct} /></li>
          <li><input type="text" value ={this.state.description}placeholder = "Description" onChange ={this.onInputChangeDesc}/></li>
          
          <button className="btn btn-success btn-sm" onClick={this.addProduct}>submit</button>
        
      </div>
    )
  }
});

export default Registration;