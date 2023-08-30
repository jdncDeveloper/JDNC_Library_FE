import axiosInstance from "../axiosConfig";
/**
 * 모든 인재정보 불러오기 API
 * @param {page, size}
 * @returns 
 */
export const fetchGetAllMemberList = async () => {
  try {
    const response = await axiosInstance.get(`/member/list`);
    return response.data;
  } catch (error) {
    console.log(error.response.status);
  }
}
/**
 * 도서지기 정보 불러오기 API
 * @returns 
 */
export const fetchGetBookKeeperList = async () => {
  try {
    const response = await axiosInstance.get(`/manager/book-keeper`);
    return response.data;
  } catch (error) {
    console.log(error.response.status);
  }
}
/**
 * 검색한 인재정보 불러오기 API
 * @param {string} searchWord 
 * @returns 
 */
export const fetchGetSearchUserList = async (searchWord) => {
  try {
    const response = await axiosInstance.get(`/member/user`, {
      params: {
        name: searchWord
      }
    });
    return response.data;
  } catch (error) {
    console.log(error.response.status);
  }
}
/**
 * 도서지기 해제 API
 * @param {Number} bookKeeperMbNumber 
 * @returns 
 */
export const fetchDeleteBookKeeper = async (bookKeeperMbNumber) => {
  try {
    const response = await axiosInstance.delete(`/manager/book-keeper`, {
      data: {
        mbNumber: bookKeeperMbNumber
      }
    });
    return response;
  } catch (error) {
    console.log(error.response.status);
  }
}
/**
 * 도서지기 임명 API
 * @param {Number} bookKeeperMbNumber 
 * @returns 
 */
export const fetchPostBookKeeper = async (bookKeeperMbNumber) => {
  try {
    const response = await axiosInstance.post(`/manager/book-keeper`, {
      mbNumber: bookKeeperMbNumber
    });
    return response;
  } catch (error) {
    console.log(error.response.status);
  }
}
