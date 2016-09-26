const Storage = {
  read(key) {
    const serializedData = localStorage[key]

    try {
      let savedState = JSON.parse(serilizedData)
      return savedState
    } catch(err) {
      console.log('I am the catch err', err)
      return null
    }
  },
  write(key, data) {
    const serializedData = JSON.stringify(data);
    localStorage[key] = serializedData
  }
}

export default Storage;