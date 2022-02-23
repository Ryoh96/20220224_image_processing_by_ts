/**
 * 空間フィルタリング共通処理
 * @param image 入力画像
 * @param kernel カーネル(3x3)
 * @param ctxOut CanvasRenderingContext2Dインターフェース
 * @returns 出力画像
 */
export const spaceFilter = (image: ImageData, kernel: number[][], ctxOut: CanvasRenderingContext2D) => {
  const width = image.width
  const height = image.height
  const data = image.data

  let outImage = ctxOut.createImageData(width, height)

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const pos = 4 * (i * width + j)

      let R = 0
      let G = 0
      let B = 0

      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          if (!(i === 0 || i === height - 1 || j === 0 || j === width - 1)) {
            const kpos = 4 * (((i - 1) + k ) * width + ((j -1) + l))
            R += data[kpos] * kernel[k][l]
            G += data[kpos + 1] * kernel[k][l]
            B += data[kpos + 2] * kernel[k][l]
          } else {
            R += 255
            G += 255
            B += 255
          }
        }
      } 

      outImage.data[pos] = R
      outImage.data[pos + 1] = G
      outImage.data[pos + 2] = B
      outImage.data[pos + 3] = data[pos + 3]
    }
  }
  return outImage
}