import React, { Component } from 'react'
import uuid from 'uuid'
import GradeFormAction from '../actions/GradeFormAction'

export default class GradeForm extends Component {

  constructor(props){
    super(props)
    this._addAssignment = this._addAssignment.bind(this)
  }

  _addAssignment(e){
    e.preventDefault()
    const { assign, possible, awarded } = this.refs;
    let newAssignment = {
      assign: assign.value,
      possible: parseInt(possible.value), 
      awarded: parseInt(awarded.value),
      id: uuid()
    }
    assign.value = ''
    possible.value = ''
    awarded.value = ''
    GradeFormAction.newAssignment(newAssignment)
  }
  
  render(){

    return(
      <form onSubmit={this._addAssignment}>
        <div className="form-group">
          <label htmlFor="gradeInput">Assignment Name: </label>
          <input ref='assign' type="text" className="assignmentName"/>
        </div>
        <div className="form-group">
          <label htmlFor="gradeInput">Points Possible: </label>
          <input ref='possible' type="number" className="gradeEntry"/>
        </div>
        <div className="form-group">
          <label htmlFor="gradeInput">Points Awarded: </label>
          <input ref='awarded' type="number" className="gradeEntry"/>
        </div>
        <button className='btn btn-lg btn-success'>Submit Assignment</button>
      </form>
    )
  }
}
