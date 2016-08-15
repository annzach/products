import React from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'

const Title = React.createClass({



render(){
    return (
      <div>
        <h1 id="bhTitle">ProductOrganizer</h1>
        <hr/>

       <button>
        <Link to = '/registration'>Registration</Link>
        </button>

        <button>
        <Link to = '/display'>Display</Link>
        </button>
      
        
        {this.props.children}
      </div>
    )
  }
})
export default Title;