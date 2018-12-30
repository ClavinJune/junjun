class Sprite {
  constructor (src, imgH, imgW, spriteH, spriteW)
  {
    this.img = new Image()
    this.img.src = src
    this.imgH = imgH
    this.imgW = imgW
    this.spriteH = spriteH
    this.spriteW = spriteW
    this.row = spriteH / imgH
    this.col = spriteW / imgW
  }

  draw (context, spriteIndex, positionX, positionY)
  {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(this.img,
      this.imgW*spriteIndex, 0, this.imgW, this.imgH,
      positionX, positionY, this.imgW, this.imgH)
  }

}