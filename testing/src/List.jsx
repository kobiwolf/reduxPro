import React from 'react'
import {addName} from './redux/actions'
import { connect } from 'react-redux'

function List({names,addName}) {
  return (
    <div>
      <h2>list</h2>
      {names && names.map((name,i)=><h2 key={i}>{name}</h2>)}
    </div>
  )
}

const mapStateToProps=(state)=>({names:state.namesReducer})
const mapDispatchToProps={addName}

export default connect(mapStateToProps,mapDispatchToProps)(List)