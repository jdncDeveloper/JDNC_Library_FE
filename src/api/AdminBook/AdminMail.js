import axiosInstance from '../axiosConfig';

/**
 * @param {Number} borrowId Id
 */

export const fetchPOSTsendMail = async (borrowId) => {
  try {
    return await axiosInstance.post(`/mail`, {
      id: borrowId,
    });
  } catch (error) {
    console.log(`Error fetching sendMail: ${error.message}`);
  }
};
