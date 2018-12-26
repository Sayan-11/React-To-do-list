import React, { Component } from 'react'
import TodoItem from "./TodoItem";

export default class extends Component {

  render() {
    const {handleDelete} = this.props
    return (
      <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">Todo list
      </h3>
      {
       this.props.items.map(item=>{
            return(
                <TodoItem 
                key={item.id} 
                title={item.title}
                handleDelete={()=>handleDelete(item.id)}
                />
            )
        })
      }
      

      <button type="button" className="btn btn-danger btn-block text-capitalize mt-3" onClick={this.props.clearList}>
      Clear List
      </button>
      </ul>
    )
  }
}
