import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../store/userInfoSlice';
import { fetchGETUserInfo } from '../api/user/userInfo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

/**
 * 원하는 role과 일치하는지 boolean 값으로 리턴합니다.
 * 
 * @param {string} role
 * @returns {boolean}
 */
export function useValidRole(role = 'user') {
  const [ validateUserRole, setValidateUserRole ] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function getUserInfo() {
    try {
      const response = await fetchGETUserInfo();

      dispatch(updateUserInfo(response));

      if(response.role !== role) {
        setValidateUserRole(false);
        return;
      }

      setValidateUserRole(true);

      return;
      
    } catch (error) {
      alert('유저 정보 확인에 실패했습니다.');
      navigate(-1);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  return validateUserRole;
}
