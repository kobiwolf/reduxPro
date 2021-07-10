import React, { useState } from 'react'
import List from './List'
import { connect } from 'react-redux'
import {addName} from './redux/actions'
 function Box({addName}) {
  const [input,setInput]=useState('')
  return (
    <div>
      <h2>Box</h2>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>{
        addName(input);
        setInput("")
      }}>save comment</button>
      <List/>
    </div>
  )
}


export default connect(null,{addName})(Box)