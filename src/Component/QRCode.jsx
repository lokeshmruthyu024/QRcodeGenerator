import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {
  const [qrCode, setQRCode] = useState('');
  const [input, setInput] = useState('');
  const handleGenerateQrCode = () => {
    setQRCode(input)
  }
  return (
    <div className='Box'>
      <h1>QR Code Generator</h1>
      <div className='Container'>
        <input type="text" name='qr-code' placeholder='Enter Your Value Here'
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
        <QRCode
          id='qr-code-value'
          value={qrCode} size={400} bgColor='white'
        />
      </div>
    </div>
  )
}

export default QRCodeGenerator
