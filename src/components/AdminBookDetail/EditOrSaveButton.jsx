import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateUrl } from '../../constant/navigateUrl';
import { fetchPOSTCreateBook, fetchPUTUpdateBook } from '../../api/AdminBook/AdminBookDetailAPI';
import { INITIAL_BOOK } from './AdminBookDetail';

const EditOrSaveButton = ({ id, isEditing, setIsEditing, selectedBook, newBook, setNewBook }) => {
  const navigate = useNavigate();

  const handleEditOrSave = async (event) => {
    event.preventDefault();
    if (isEditing) {
      // 수정 updateBook.api
      try {
        const { id: _, available: __, ...bookWithoutIdAndAvailable } = selectedBook;
        const response = await fetchPUTUpdateBook(id, bookWithoutIdAndAvailable);
        if (response.status === 204) {
          alert('책 정보가 수정 되었습니다.');
        } else {
          alert('책 정보 수정에 실패했습니다.');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // 저장 createBook.api
      try {
        const response = await fetchPOSTCreateBook(newBook);
        if (response.status === 201) {
          alert('책 정보가 등록 되었습니다.');
          setNewBook(INITIAL_BOOK);
          navigate(navigateUrl.adminAddBookNew);
        } else {
          alert('책 정보 등록에 실패했습니다.');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <button type="submit" onClick={handleEditOrSave}>
      {isEditing ? '수정' : '저장'}
    </button>
  );
};

export default EditOrSaveButton;
