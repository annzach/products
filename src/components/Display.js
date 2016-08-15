import React from 'react'

const Display = React.createClass({

 getInitialState: function(){
   return {
    data:[]
   }
 },


  DeleteMe :function(id){
 
   var url = `/productorganizer/${id}`
    fetch(url,
    {
      method: "DELETE",
      headers:{  "Content-type": "application/json"  },
      
    })
      .then(res => {
      return res.json();
    })
    .catch(err => console.log('err','err'))


  },


  getMe: function(event){
    var url=`/productorganizer/`
    fetch(url,
    {
      method: "GET",
      headers : {
        "Content-type":"application/json"
      }   
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      
      this.setState({data:data});
    })
    .catch(err => console.log('err','err'))

  },

  
  
  render(){
    console.log('in display page');
    return (
      <div>
        <div>
           <button  onClick ={this.getMe} >Display</button>
        </div>
        <DataDisplay data = {this.state.data} delete={this.DeleteMe} modify ={this.ModifyMe}/>
      </div>
      )
 }
});


const DataDisplay = React.createClass({

  DeleteMe :function(event){
   var id = event.target.value;
   this.props.delete(id);


  },
 

 ModifyMe :function(){
   console.log("modify me");
  },
  render(){
       console.log('state',this.props.data)
       let product = this.props.data.map(info=>{
        return(
          <tr key ={info.id}>
            <td>{info.name}</td>
            <td>{info.description}</td>
            <td>{info.price}</td>
            <td><button value ={info.id} onClick ={this.DeleteMe}>Delete</button>
                 <button onClick={this.ModifyMe}>Modify</button></td>
          </tr>
          );
      });
      return (
        <table className="table table-bordered">
          <thead>
              <tr>
                <th>Name</th>
                <th>Product</th>
                <th>Price</th>
                <th>Delete/Modify</th>
              </tr>
            </thead>
            <tbody>
              {product}
            </tbody>
        </table>
        )

    
  }


});

export default Display;