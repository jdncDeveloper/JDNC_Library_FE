import Style from './CreateQR.style';
// import { QRCodeCanvas } from 'qrcode.react';
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

    return(
        <>
            <Style.QrContainer>
                <Style.QRInput placeholder='bookId를 입력하세요.' value={idValue} onChange={inputHandler} />
                <QRCodeCanvas value={`${baseUrl}/borrowbook/${idValue}`} />
                <span>{`${baseUrl}/borrowbook/${idValue}`}</span>
            </Style.QrContainer>
        </>
    )
}

export default CreateQR;
