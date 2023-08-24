import React from 'react';
import Style from './AdminMainHead.style';
import AdminTitle from '../AdminTitle/AdminTitle';
import AdminSearch from '../AdminSearch/AdminSearch';
import ExcelDownloadButton from '../ExcelDownloadBtn/ExcelDownloadButton';
import DateSelector from '../DateSelector/DateSelector';

const AdminMainHead = (props) => {
  const excelFileUrl = 'backend url';
  const filename = 'filename';

  const { mainTitle, subTitle, placeholder, hideButton, hideDate, hideSearch } = props;

  return (
    <Style.HeadSection>
      <AdminTitle mainTitle={mainTitle} subTitle={subTitle} />
      <Style.ComponentsWrapper>
        <ExcelDownloadButton excelFileUrl={excelFileUrl} filename={filename} hide={hideButton} />
        <DateSelector hide={hideDate} />
        <AdminSearch hide={hideSearch} placeholder={placeholder} />
      </Style.ComponentsWrapper>
    </Style.HeadSection>
  );
};

export default AdminMainHead;
