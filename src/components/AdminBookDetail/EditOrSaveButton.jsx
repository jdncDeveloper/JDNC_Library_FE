import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateUrl } from '../../constant/navigateUrl';
import { fetchPOSTCreateBook, fetchPUTUpdateBook } from '../../api/AdminBook/AdminBookDetailAPI';
import { INITIAL_BOOK } from './AdminBookDetail';

const EditOrSaveButton = ({ id, isEditing, selectedBook, newBook, setNewBook }) => {
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
        const requiredKeys = ['title', 'author', 'publisher', 'bookGroup', 'image', 'content'];
        const fieldLabels = {
          title: '도서명',
          author: '저자',
          publisher: '출판사',
          bookGroup: '그룹',
          image: '이미지',
          content: '책소개',
        };
        const missingFields = requiredKeys.filter((key) => !newBook[key]);
        const missingFieldLabels = missingFields.map((field) => fieldLabels[field] || field);
        if (missingFields.length > 0) {
          alert(`${missingFieldLabels.join(', ')} 필드를 입력해주세요.`);
          return;
        }

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
      {isEditing ? '도서수정' : '도서등록'}
    </button>
  );
};

export default EditOrSaveButton;
