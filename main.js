import QRCode from 'qrcode'
import { getCssVariable } from './utiles'
import './style.css'

const setAnchorDownload = downloadLink => {
  const anchor = document.getElementById('qr-download')
  anchor.setAttribute('download', 'QR')
  anchor.href = downloadLink
  return anchor
}

const setQRImage = async str => {
  const opts = {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    quality: 1,
    margin: 1,
    width: 282,
    color: {
      dark: $qrInputColorDark.value,
      light: $qrInputColorLight.value
    }
  }

  $qrImage.src = await QRCode.toDataURL(str, opts)
  $qrImage.alt = str
}

const url = window.location.href
const $qrForm = document.getElementById('qr-form')
const $qrInput = document.getElementById('input-qr')

const $qrInputColorLight = document.getElementById('input-color-light')
const $qrInputColorDark = document.getElementById('input-color-dark')

const $qrImage = document.getElementById('qr-img')

$qrInput.placeholder = url

window.onload = async () => {
  $qrInputColorDark.setAttribute('value', getCssVariable('--primary-color'))
  await setQRImage(url)
  setAnchorDownload($qrImage.src, 'QR')
}

$qrForm.addEventListener('submit', async event => {
  event.preventDefault()
  const value = $qrInput.value
  await setQRImage(value)
  setAnchorDownload($qrImage.src)
})
