import React from "react";
import { useState } from "react";
import HowToUseModal from "../../components/HowToUseModal/HowToUseModal";

const Main = () => {
const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <div>
        <button>공지사항</button>
        <button>도서 목록</button>
        <button>대여 현황</button>
        <button onClick={showModal}>더큰내일도서관 사용법 (필독)</button>

        {isModalOpen && (
          <HowToUseModal setIsModalOpen={setIsModalOpen}></HowToUseModal>
        )}
      </div>
    </>
  )
}

export default Main;