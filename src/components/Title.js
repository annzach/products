import React from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'


const Title = React.createClass({
render(){
    return (
      <div>
        <h1 id="bhTitle">ProductOrganizer</h1>
        <hr/>
      
        
        {this.props.children}
      </div>
    )
  }
})
export default Title;