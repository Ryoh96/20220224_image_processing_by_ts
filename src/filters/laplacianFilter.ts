import { grayScaleFilter } from './grayScaleFilter';
import { spaceFilter } from './spaceFilter';
/**
 * ラプラシアンフィルタ
 * @param image 入力画像
 * @param ctxOut CanvasRenderingContext2Dインターフェース
 * @returns 空間フィルタリングの結果
 */
export const laplacianFilter = (image: ImageData, ctxOut: CanvasRenderingContext2D) => {
  const kernel = [
    [0, 1, 0],
    [1, -4, 1],
    [0, 1, 0]
  ]
  return spaceFilter(grayScaleFilter(image, ctxOut), kernel, ctxOut)
}