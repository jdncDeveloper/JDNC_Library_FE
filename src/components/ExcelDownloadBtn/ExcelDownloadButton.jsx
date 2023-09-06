import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchGETExcelDownload } from '../../api/AdminBook/AdminBookAPI';
import Style from './ExcelDownloadButton.style';

const ExcelDownloadButton = ({ excelFileUrl, filename, hide }) => {
  const dispatch = useDispatch();
  const year = useSelector((state) => state.dateSelect.year);
  const month = useSelector((state) => state.dateSelect.month);

  //엑셀 다운로드 함수
  const handleExcelDownload = async () => {
    try {
      const excelDownloadUrl = await fetchGETExcelDownload(year, month);
      console.log(excelDownloadUrl);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    !hide && (
      <Style.ButtonWrapper href={excelFileUrl} download={filename + '.xlsx'}>
        <button onClick={() => handleExcelDownload()}>Excel Download</button>
      </Style.ButtonWrapper>
    )
  );
};

export default ExcelDownloadButton;
