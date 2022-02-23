import gammaTransform from "../transforms/gammaTransform"
/**
 * 赤みを強めるフィルタ
 * @param image 入力画像
 * @param ctxOut CanvasRenderingContext2Dインターフェース
 * @returns 出力画像
 */
export const redFilter = (image: ImageData, ctxOut: CanvasRenderingContext2D) => {
  const width = image.width
  const height = image.height
  const data = image.data

  let outImage = ctxOut.createImageData(width, height)

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const pos = 4 * (i * width + j)

      outImage.data[pos] = gammaTransform(data[pos])
      outImage.data[pos + 1] = data[pos + 1]
      outImage.data[pos + 2] = data[pos + 2]
      outImage.data[pos + 3] = data[pos + 3]
    }
  }

  return outImage
}
