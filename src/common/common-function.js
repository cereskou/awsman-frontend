function generatedPassword () {
    let charactersArray = 'a-z'.split(',')
    let CharacterSet = ''
    let password = ''
    let size = 8
    
    switch (this.strengthLevel) {
      case 12:
        size = 10
        charactersArray = 'a-z,A-Z'.split(',')
        break
      case 24:
        size = 12
        charactersArray = 'a-z,A-Z,0-9'.split(',')
        break
     case 36:
        size = 14
        charactersArray = 'a-z,A-Z,0-9,#'.split(',')
        break
     case 48:
        size = 16
        charactersArray = 'a-z,A-Z,0-9,#'.split(',')
        break
    }
    if (charactersArray.indexOf('a-z') >= 0) {
      CharacterSet += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (charactersArray.indexOf('A-Z') >= 0) {
      CharacterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    
    if (charactersArray.indexOf('0-9') >= 0) {
      CharacterSet += '0123456789'
    }
    if (charactersArray.indexOf('#') >= 0) {
      CharacterSet += '![]{}()%&*$#^<>~@|'
    }
    for (let i = 0; i < size; i++) {
      password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length))
    }
    
    return password
  }

  export default generatedPassword;