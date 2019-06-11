import Node from './node.js'

export default class TreeStore {
  constructor(options) {
    for (let option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option]
      }
    }
    this.root = new Node({
      data: this.data,
      store: this
    })
  }
}
