import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updateUserInfo } from '../store/userInfoSlice';
import { fetchGETUserInfo } from '../api/user/userInfo';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/**
 * 원하는 role과 일치하는지 boolean 값으로 리턴합니다.
 * 
 * @param {string} role
 * @returns {boolean}
 */
export async function useValidRole(role = 'user') {
  const [ validateUserRole, setValidateUserRole ] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userRole =  useSelector(state => state.userInfo);

  async function getUserInfo() {
    try {
      const response = await fetchGETUserInfo();

      dispatch(updateUserInfo(response.data));

      if(response.data.role !== role) {
        setValidateUserRole(false);
        return;
      }
      setValidateUserRole(true);
      return;
      
    } catch (error) {
      alert('유저 정보 확인에 실패했습니다.');
      navigate('/login',  { state: { returnPath: location.pathname } });
    }
  }

  await getUserInfo();

  return validateUserRole;
}
