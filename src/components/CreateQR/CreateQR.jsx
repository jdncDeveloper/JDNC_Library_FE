import Style from './CreateQR.style';
import { QRCodeCanvas } from 'qrcode.react';
import { useState } from 'react';

const CreateQR = () => {
  const [ idValue, setIdValue ] = useState('');
  const [ fileName, setFileName ] = useState('QR_Book_');
  const baseUrl = window.location.origin;
    
  function handleBookNumber(event) {
    const value = event.target.value;
    if(Number(value) || value === '') {
      setIdValue(value);
    }
  }
  const handleFileName = (event) => {
    const value = event.target.value;
    setFileName(value);
  }

  function imageDownload() {
    const canvasDom = document.querySelector('canvas');
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
          <QRCodeCanvas value={`${baseUrl}/borrowbook/qr/${idValue}`} />
          <span>{`책번호: ${idValue}번`}</span>
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


