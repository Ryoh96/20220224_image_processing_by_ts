import "./style.scss"
import { invertionFilter } from "./filters/invertFilter"
import { redFilter } from './filters/redFilter';
import { brightenFilter } from './filters/brightenFilter';
import { grayScaleFilter } from './filters/grayScaleFilter';
import { binarizationFilter } from './filters/binarizationFilter';
import { sharpnessFilter } from './filters/sharpnessFilter';
import { gaussianFilter } from './filters/gaussianFilter';
import { laplacianFilter } from './filters/laplacianFilter';
import { medianFilter } from './filters/medianFilter';

const SIZE = 256

//入力canvas
const canvasIn = document.querySelector<HTMLCanvasElement>('#canvas-in')!
canvasIn.width = SIZE
canvasIn.height = SIZE
const ctxSrc = canvasIn.getContext('2d')!

//出力canvas
const canvasOut = document.querySelector<HTMLCanvasElement>('#canvas-out')!
canvasOut.width = SIZE
canvasOut.height = SIZE
const ctxOut = canvasOut.getContext('2d')!

let image = new Image()
let srcImage: ImageData
let outImage: ImageData

//フィルターselect
const selectFilter = document.querySelector<HTMLSelectElement>('.select-filter')
selectFilter?.addEventListener('change', e => {
  const target = e.target as HTMLSelectElement
  switch (target.value) {
    case 'binary':
      outImage = binarizationFilter(srcImage, ctxOut)
      break
    case 'redness':
      outImage = redFilter(srcImage, ctxOut)
      break
    case 'grayscale': 
      outImage = grayScaleFilter(srcImage, ctxOut)
      break
    case 'brighten':
      outImage = brightenFilter(srcImage, ctxOut)
      break
    case 'invert':
      outImage = invertionFilter(srcImage, ctxOut)
      break
    case 'laplacian':
      outImage = laplacianFilter(srcImage, ctxOut)
      break
    case 'gaussian':
      outImage = gaussianFilter(srcImage, ctxOut)
      break
    case 'sharp':
      outImage = sharpnessFilter(srcImage, ctxOut)
      break
    case 'median':
      outImage = medianFilter(srcImage, ctxOut)
      break
    default:
      break
  }
  ctxOut.putImageData(outImage, 0, 0)
})

//ロードが終わったら画像をcanvasから取得
image.addEventListener('load', () => {
  ctxSrc.drawImage(image, 0, 0)
  
  srcImage = ctxSrc.getImageData(0, 0, SIZE, SIZE)
  document.querySelector('.select-filter')?.classList.add('appear')
})

//フィルターが変更されたら
let inputElement = document.querySelector<HTMLInputElement>('#fileInput')
inputElement?.addEventListener('change', e => {
  const target = e.target as HTMLInputElement
  if (target.files !== null) {
    image.src = URL.createObjectURL(target.files[0])
  }
}, false)


