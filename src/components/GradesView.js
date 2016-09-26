import React, { Component } from 'react' 
import GradeFormAction from '../actions/GradeFormAction'
import AssignmentStore from '../stores/AssignmentStore'

export default class GradesView extends Component {

  constructor(props){
    super(props)
    this.state = {
      assignments: AssignmentStore._getAssignment()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount(){
    AssignmentStore.startListening(this._onChange)
  }

  componentWillUnmount(){
    AssignmentStore.stopListening(this._onChange)
  }

  _onChange() {
    console.log( 'onChange was called', this.state.assignments )
    this.setState({
      assignments: AssignmentStore._getAssignment()
    })
  }


  render() {
    console.log('render was called', this.state.assignments)
    const { assignments } = this.state
  

  return (

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Possible Score</th>
              <th>Awarded</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
          </table>
          {/*{this.state.assignments ? assignments.map((assign, num) => {*/}
                <div>
                  <span>{this.state.assignments.assign}</span>
                  <span>{this.state.assignments.possible}</span>
                  <span>{this.state.assignments.awarded}</span>
                </div>
          {/*}}) : <h3>Not Present</h3>}*/}
      </div>
    )
  }
}