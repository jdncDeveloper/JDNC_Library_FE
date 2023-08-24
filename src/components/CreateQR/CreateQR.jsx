import Style from './CreateQR.style';
import { QRCodeCanvas } from 'qrcode.react';
import { useState } from 'react';

const  CreateQR = () => {
    const [ idValue, setIdValue ] = useState('');
    const baseUrl = window.location.origin;
    
    function inputHandler(e) {
        const value = e.target.value;
        if(Number(value) || value === '') {
            setIdValue(value);
        }
    }

    function imageDownload() {
        const canvasDom = document.querySelector('canvas');
        const imageCanvas = canvasDom.toDataURL('image/png');

        const a = document.createElement("a");
        a.href = imageCanvas;
        a.download = "qrcode.png";
        a.click();
    }
    return(
        <>
            <Style.QrContainer>
                <Style.QRInput placeholder='bookId를 입력하세요.' value={idValue} onChange={inputHandler} />
                <QRCodeCanvas value={`${baseUrl}/borrowbook/qr/${idValue}`} />
                <span>{`${baseUrl}/borrowbook/qr/${idValue}`}</span>
                <button onClick={imageDownload}>down</button>
            </Style.QrContainer>
        </>
    )
}

export default CreateQR;


