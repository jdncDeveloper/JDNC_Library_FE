import Style from './CreateQR.style';
import { QRCodeCanvas } from 'qrcode.react';
import { useRef } from 'react';
import { useState } from 'react';

const CreateQR = () => {
  const [ idValue, setIdValue ] = useState('');
  const [ fileName, setFileName ] = useState('QR_Book_');
  const [bookNumberCanvasImage, setBookNumberCanvasImage] = useState('null');
  const baseUrl = window.location.origin;
  const bookNumberCanvas = useRef(null);

  function handleBookNumber(event) {
    const value = event.target.value;
    if(Number(value) || value === '') {
      setIdValue(value);
      const context = bookNumberCanvas.current.getContext('2d');
      context.clearRect(0, 0, bookNumberCanvas.current.width, bookNumberCanvas.current.height);
      context.fillStyle = 'white';
      context.fillRect(0, 0, bookNumberCanvas.current.width, bookNumberCanvas.current.height);
      context.fillStyle = 'black';
      context.strokeRect(2, 2, bookNumberCanvas.current.width - 4, bookNumberCanvas.current.height - 4);
      context.font = '15px Arial';
      if(value.length === 1) context.fillText(`  ${value}`, 1, 15);
      if(value.length === 2) context.fillText(` ${value}`, 1, 15);
      if(value.length >= 3) context.fillText(`${value}`, 1, 15);
      setBookNumberCanvasImage(bookNumberCanvas.current.toDataURL('image/jpg'));
    }
  }
  const handleFileName = (event) => {
    const value = event.target.value;
    setFileName(value);
  }

  const canvasDom = document.querySelector('canvas');

  function imageDownload() {
    const imageCanvas = canvasDom.toDataURL('image/png');

    const downloadLink = document.createElement("a");
    downloadLink.href = imageCanvas;
    downloadLink.download = `${fileName}(${idValue}).png`;
    downloadLink.click();
  }
  return(
    <>
      <Style.QrContainer>
        <div>
          <QRCodeCanvas value={`${baseUrl}/borrowbook/qr/${idValue}`}
          size={150} 
          imageSettings={{src: bookNumberCanvasImage, height: 20, width: 30}}/>
          <span>{`책번호`}</span>
          <canvas ref={bookNumberCanvas} width={'30px'} height={'20px'}></canvas>
        </div>
        <div>
          <Style.QRInput placeholder='bookId를 입력하세요.' value={idValue} onChange={handleBookNumber}/>
          <Style.QRInput placeholder='파일명을 입력하세요.' value={fileName} onChange={handleFileName}/>
          <span>{`파일명: ${fileName}(${idValue}).png`}</span>
          <button onClick={imageDownload}>down</button>
        </div>
      </Style.QrContainer>
    </>
  )
}

export default CreateQR;


