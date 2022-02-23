/**
 * 2値化フィルター
 * @param image 入力画像
 * @param ctxOut CanvasRenderingContext2Dインターフェース
 * @param threshold しきい値
 * @returns 出力画像
 */
export const binarizationFilter = (image: ImageData, ctxOut: CanvasRenderingContext2D ,threshold=128) => {
  const width = image.width
  const height = image.height
  const data = image.data

  let outImage = ctxOut.createImageData(width, height)

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const pos = 4 * (i * width + j)

      const R = data[pos]
      const G = data[pos + 1]
      const B = data[pos + 2]

      const lightness = 0.299 * R + 0.587 * G + 0.144 * B > threshold ? 255 : 0

      outImage.data[pos] = lightness
      outImage.data[pos + 1] = lightness
      outImage.data[pos + 2] = lightness
      outImage.data[pos + 3] = data[pos + 3]
    }
  }
  return outImage
}