import React from 'react';
import Style from './AdminTitle.style';

const AdminTitle = ({ mainTitle, subTitle }) => {
  return (
    <Style.TitleContainer>
      <h1>{mainTitle}</h1>
      <h2>{subTitle}</h2>
    </Style.TitleContainer>
  );
};

export default AdminTitle;
