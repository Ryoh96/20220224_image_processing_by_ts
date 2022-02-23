/**
 * メディアンフィルタ
 * @param image 入力画像
 * @param ctxOut CanvasRenderingContext2Dインターフェース
 * @returns 出力画像
 */
export const medianFilter = (image: ImageData, ctxOut: CanvasRenderingContext2D) => {
  const width = image.width
  const height = image.height
  const data = image.data

  let outImage = ctxOut.createImageData(width, height)

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const pos = 4 * (i * width + j)

      const arrayR = []
      const arrayG = []
      const arrayB = []

      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          if (!(i === 0 || i === height - 1 || j === 0 || j === width - 1)) {
            const kpos = 4 * (((i - 1) + k ) * width + ((j -1) + l))
            arrayR.push(data[kpos])
            arrayG.push(data[kpos+ 1])
            arrayB.push(data[kpos+ 2])
          } else {
            arrayR.push(255)
            arrayG.push(255)
            arrayB.push(255)
          }
        }
      } 

      const R = arrayR.sort()[4]
      const G = arrayG.sort()[4]
      const B = arrayB.sort()[4]

      outImage.data[pos] = R
      outImage.data[pos + 1] = G
      outImage.data[pos + 2] = B
      outImage.data[pos + 3] = data[pos + 3]
    }
  }
  return outImage
}