  assignments: AssignmentStore._getAssignment()
    }

    this._onChange = this._onChange.bind(this)


componentWillMount(){
    AssignmentStore.startListening(this._onChange)
  }

  componentWillUnmount(){
    AssignmentStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      assignments: AssignmentStore._getAssignment()
    })
  }
