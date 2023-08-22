import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import Style from '../HowToUseModal/HowToUseModal.style';

const HowToUseModal = ({ returnInfo }) => {
  const [hidePart, setHidePart] = useState(false);

  useEffect(() => {
    if (returnInfo) {
      setHidePart(true);
    }
  }, [returnInfo]);

  return (
    <>
      <Style.Modal>
        <Style.ModalTitle hidden={hidePart}>더큰내일 도서관 이용안내</Style.ModalTitle>
        <Style.ListContainer>
          <Style.ListUl>
            <li>
              <Style.ListTitle hidden={hidePart}>대여안내</Style.ListTitle>
              <Style.SublistUl hidden={hidePart}>
                <li>
                  <h3>대여권수 : 1인 월 최대 3권</h3>
                </li>
                <li>
                  <h3>대여방법</h3>
                  <ul>
                    <li>
                      <p>도서 대여는 실물 도서 뒷면에 있는 QR코드로 하면 완료</p>
                    </li>
                    <li>
                      <p>
                        메인페이지에서는 도서목록을 열람하거나 대여현황을 확인하는 페이지로 즉시
                        대여는 불가능합니다.
                      </p>
                    </li>
                  </ul>
                </li>
              </Style.SublistUl>
            </li>
            <li>
              <Style.ListTitle>반납안내</Style.ListTitle>
              <Style.SublistUl>
                <li>
                  <h3>반납일 : 매월 말일 낮 12시까지 (휴일인 경우 전일 반납)</h3>
                </li>
                <li>
                  <h3>반납방법 : 각 층 도서반납함에 반납</h3>
                </li>
              </Style.SublistUl>
            </li>
            <li>
              <Style.ListTitle>반납예시</Style.ListTitle>
              <Style.SublistUl>
                <li>
                  <h3>도서 반납은 대여일에 상관없이 매월 말일 반납</h3>
                  <ul>
                    <li>
                      <p>대여일 : 1월 1일 → 반납일 : 1월 31일</p>
                    </li>
                    <li>
                      <p>대여일 : 1월 25일 → 반납일 : 1월 31일</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>
                    도서 반납 절차는 각 층 반납함에 있는 QR을 찍고 대여현황페이지에서 반납버튼을
                    누르면 반납 처리가 됩니다.
                    <p>(※ 반납 후 책은 꼭 반납함에 넣어주세요.)</p>
                  </h3>
                </li>
                <li>
                  <h3>대여·반납시 발생한 오류나 문의 사항은 매니저님께 문의바랍니다.</h3>
                </li>
              </Style.SublistUl>
            </li>
          </Style.ListUl>
          <Style.Footer>
            <h2>탐나는인재 모두가 함께 읽는 도서입니다.</h2>
            <h2>반납일을 지켜주시고 분실 및 파손에 유의해주세요.</h2>
            <img src={logo} alt="더큰내일도서관 로고" />
          </Style.Footer>
        </Style.ListContainer>
      </Style.Modal>
    </>
  );
};

export default HowToUseModal;
