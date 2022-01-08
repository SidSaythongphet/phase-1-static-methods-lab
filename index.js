class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, "")
  }

  static titleize(string) {
    let sans = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    let splitString = string.split(' ').map(word => {
      if(!sans.includes(word)){
        return Formatter.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
    return Formatter.capitalize(splitString)
  }
}