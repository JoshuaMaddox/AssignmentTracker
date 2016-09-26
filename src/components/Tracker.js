import React, { Component } from 'react'
import AssignmentStore from '../stores/AssignmentStore'
import GradeForm from './GradeForm'
import GradesView from './GradesView'

export default class Tracker extends Component {

  render(){
    return (
      <div className="container">
        <div className="row">
          <h1>Tracker App is Alive</h1>
          <GradeForm />
          <GradesView />
        </div>
      </div>
    )
  }
}