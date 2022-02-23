import { spaceFilter } from "./spaceFilter"

/**
 * 先鋭化フィルタ
 * @param image 入力画像
 * @param ctxOut CanvasRenderingContext2Dインターフェース
 * @returns 出力画像
 */
export const sharpnessFilter = (image: ImageData, ctxOut: CanvasRenderingContext2D) => {
  const kernel = [
    [-1, -1, -1],
    [-1, 9, -1],
    [-1, -1, -1]
  ]
  return spaceFilter(image, kernel, ctxOut)
}