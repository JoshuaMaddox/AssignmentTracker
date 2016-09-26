import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events'
import Storage from '../Storage'

let _assignments = []

class AssignmentStore extends EventEmitter {
  constructor(newAssignment) {
    super()
    AppDispatcher.register(action => {
      switch(action.type) {
        case 'CREATE_ASSIGNMENT':
        let { newAssignment } = action.payload
        console.log('I am newAssignment in the store: ', newAssignment)
        _assignments.push(newAssignment)
        this.emit('CHANGE')
        break;
      }
    })
    this.on('CHANGE', () => {
    Storage.write('assignments', _assignments)
  })
  }



  startListening(callback){
    this.on('CHANGE', callback)
  }

  stopListening(callback){
    this.removeListener('CHANGE', callback)
  }

  _setAssignments(newAssignment){
    _assignments.push(newAssignment)
  }

  _getAssignment(){
    return _assignments
  }
}

export default new AssignmentStore