import axiosInstance from "../axiosConfig";
/**
 * 유저의 기본 정보를 불러옵니다.
 * 
 * @returns {Promise<object>} 유저 정보를 담은 객체
 * {
 *  username: string, // 유저 이름
 *  email: string,    // 유저 이메일
 *  role: string      // 유저 권한
 * }
 */
export async function fetchGETUserInfo() {
  const response = await axiosInstance.get('member');
  return response;
}
