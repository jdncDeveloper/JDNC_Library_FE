import React from 'react';
import { useState } from 'react';
import HowToUseModal from '../../components/HowToUseModal/HowToUseModal';
import Style from '../Main/Main.style';
import BtnNav from '../../components/BtnNav/BtnNav';
import GroupTap from '../../components/GroupTap/GroupTap';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <GroupTap />
      <Style.BtnNav>
        {/* <Style.Btns to="/" $column="1 / 3" $row="1 / 2" >공지사항</Style.Btns>
        <Style.Btns to="/booklist" $column="1 / 2" $row="2 / 4">도서 목록</Style.Btns>
        <Style.Btns to="/borrowedlist" $column="2 / 3" $row="2 / 4">대여 현황</Style.Btns> */}
        <Style.HowToUseBtn onClick={showModal}>
          더큰내일도서관 사용법 <br /> (필독)
        </Style.HowToUseBtn>

        {isModalOpen && <HowToUseModal setIsModalOpen={setIsModalOpen}></HowToUseModal>}
      </Style.BtnNav>
      <BtnNav />
    </>
  );
};

export default Main;
