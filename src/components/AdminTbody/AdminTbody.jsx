import { useState } from "react";
import { useEffect } from "react"
import Style from './AdminTbody.style';
import { useLocation } from "react-router-dom";
import { fetchDeleteBookKeeper, fetchPostBookKeeper } from "../../api/user/adminUserAPI";

const AdminTbody = ({ searchAxios, TbodyData, setRefresh }) => {
  const [ fetchData, setFetchData ] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get('search');

  const fetchGetList = async () => {
    try {
      const response = await searchAxios(searchValue);
      if(!response) {
        setFetchData([]);
        return;
      };
      setFetchData(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setFetchData(TbodyData);

    if(searchValue) {
      fetchGetList();
    }
  }, [searchParams.get('search'), TbodyData]);

  const returnClassNumber = (mdNumber) => {
    let classNumber = '';

    if(!Number(mdNumber)) {
      classNumber = '-';
      return classNumber;
    }

    classNumber = mdNumber.substring(4, 5);
    return classNumber;
  }

  const appointBookKeeper = async (mbNumber) => {
    try {
      const response = await fetchPostBookKeeper(mbNumber);
      setRefresh((refreshTable) => !refreshTable);
    } catch (error) { 
      alert('임명하기 실패');
    }
  }

  const dismissBookKeeper = async (mbNumber) => {
    try {
      const response = await fetchDeleteBookKeeper(mbNumber);
      setRefresh((refreshTable) => !refreshTable);
    } catch (error) {
      alert('해제하기 실패');
    }
  }

  return(
    <Style.Tbody>
        {
          fetchData.map(({
            mbNumber,
            name,
            email,
            role,
          }, index) => {
            return(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{returnClassNumber(mbNumber)}</td>
                <td>{mbNumber}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                {
                  role !== 'ROLE_BOOKKEEPER' 
                  ? <Style.Button $backColor={'blue'} onClick={() => appointBookKeeper(mbNumber)}>임명</Style.Button> 
                  : <Style.Button $backColor={'red'} onClick={() => dismissBookKeeper(mbNumber)}>해제</Style.Button>
                }
                </td>
                <td>
                  {
                    role === 'ROLE_ADMIN' ? '관리자' :
                    role === 'ROLE_USER' ? '일반유저' :
                    role === 'ROLE_BOOKKEEPER' && '도서지기'
                  }
                </td>
              </tr>
            )
          })
        }
    </Style.Tbody>
  )
}
export default AdminTbody;
