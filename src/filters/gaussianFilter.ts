import { spaceFilter } from './spaceFilter';

/**
 * ガウシアンフィルター
 * @param image 入力画像
 * @param ctxOut CanvasRenderingContext2Dインターフェース
 * @returns 空間フィルタリングの結果
 */
export const gaussianFilter = (image: ImageData, ctxOut: CanvasRenderingContext2D) => {
  const kernel = [
    [1 / 16, 2 / 16, 1 / 16],
    [2 / 16, 4 / 16, 2 / 16],
    [1 / 16, 2 / 16, 1 / 16]
  ]
  return spaceFilter(image, kernel, ctxOut)
}