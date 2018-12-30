class Actor {
  constructor (window, canvas, context, posX, posY) {
    this.actions = {}
    this.actionsName = []
    this.window = window
    this.canvas = canvas
    this.context = context
    this.posX = posX
    this.posY = posY
    this.idle = true
  }

  addAction (name, action) {
    this.actions[name] = action
    this.actionsName.push(name)
  }

  doAction (name, toX, speedX) {
    if ( this.posX <= 0 - this.actions[name].imgW ) {
      this.posX = this.window.innerWidth
    }
    this.idle = false
    let i = 0
    let action = setInterval (() => {
      this.actions[name].draw(this.context, i++, this.posX, this.posY)

      this.posX += speedX

      if ( i >= this.actions[name].col ) {
        i = 0
        this.idle = true
      }

      if ( this.idle ) {
        let x = Math.floor(Math.random()*this.actionsName.length)
        let speed = x % 2 != 0 ? 0 : -5
        this.doAction(this.actionsName[x], 0, speed)
        clearInterval(action)
        // if ( direction === 'left') {
        //   this.doAction(this.actionsName[action], 0, 0, 'stay')
        //   clearInterval(action)
        // } else if ( direction === 'right' && this.posX >= toX ) {
        //   this.idle = true
        //   clearInterval(action)
        // } else {
        //   // this.idle = Math.floor((Math.random() * 100) + 1) <= 10
        //   // if ( this.idle == true) {
        //     this.doAction('walk', 150, -5, 'left')
        //     clearInterval(action)
        //   // }
        // }
      }

    }, 100)
  }
}