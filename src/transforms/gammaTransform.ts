/**
 * γ変換
 * @param x 
 * @param gamma 
 * @returns 
 */
const gammaTransform = (x: number, gamma=2) => {
  return 255 * (x / 255) ** (1 / gamma)
}

export default gammaTransform