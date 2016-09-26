import AppDispatcher from '../AppDispatcher'

const GradeFormAction = {
  newAssignment(newAssignment) {
    console.log('GradeFormAction: ', newAssignment)
    AppDispatcher.dispatch({
      type: 'CREATE_ASSIGNMENT',
      payload: { newAssignment }
    })
  }
}

export default GradeFormAction