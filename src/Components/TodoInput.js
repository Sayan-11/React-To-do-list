import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
      <form onSubmit={this.props.handleSubmit}>
        <div className="input-group">
        <div className="input-group-prepend">
        <div className="input-group-text bg-primary text-white">
        <i className="fas fa-book"></i>
        </div>
        <input type="text" className="form-control text-capitalize mx-6" 
        placeholder="Add a to-do item"
        value= {this.props.item}
        onChange={this.props.handleChange}
        />
        </div>
        <button type="submit" className="btn btn-block btn-primary mt-3">Add item</button>
        </div>
      </form>
      </div>
      
    )
  }
}
