import React, { useState } from 'react';
import Style from './ExcelDownloadButton.style';

const ExcelDownloadButton = ({ excelFileUrl, filename, hide }) => {
  return (
    !hide && (
      <Style.ButtonWrapper href={excelFileUrl} download={filename + '.xlsx'}>
        <button>Excel Download</button>
      </Style.ButtonWrapper>
    )
  );
};

export default ExcelDownloadButton;
