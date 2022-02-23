/**
 * ネガポジ反転
 * @param image 入力画像 
 * @param ctxOut CanvasRenderingContext2Dインターフェース
 * @returns 出力画像
 */
export const invertionFilter = (image: ImageData, ctxOut: CanvasRenderingContext2D) => {
  const width = image.width
  const height = image.height
  const data = image.data

  let outImage = ctxOut.createImageData(width, height)

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const pos = 4 * (i * width + j)

      outImage.data[pos] = 255 - data[pos]
      outImage.data[pos + 1] = 255 - data[pos + 1]
      outImage.data[pos + 2] = 255 - data[pos + 2]
      outImage.data[pos + 3] = data[pos + 3]
    }
  }

  return outImage
}