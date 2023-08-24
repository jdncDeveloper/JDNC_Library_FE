import React from 'react';
import Style from './AdminMainHead.style';
import AdminTitle from '../AdminTitle/AdminTitle';
import AdminSearch from '../AdminSearch/AdminSearch';
import ExcelDownloadButton from '../ExcelDownloadBtn/ExcelDownloadButton';

const AdminMainHead = ({ mainTitle, subTitle, hide, hideSearch }) => {
  const excelFileUrl = 'backend url';
  const filename = 'filename';

  return (
    <Style.HeadSection>
      <AdminTitle mainTitle={mainTitle} subTitle={subTitle} />
      <Style.ComponentsWrapper>
        <ExcelDownloadButton excelFileUrl={excelFileUrl} filename={filename} hide={hide} />
        <AdminSearch hide={hideSearch} />
      </Style.ComponentsWrapper>
    </Style.HeadSection>
  );
};

export default AdminMainHead;
