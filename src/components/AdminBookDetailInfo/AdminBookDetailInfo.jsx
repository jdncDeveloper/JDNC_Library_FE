import React from 'react';
import Style from './AdminBookDetailInfo.style';

const labelData = [
  { labelValue: 'title', label: '도서명', placeholder: '도서명을 입력하세요.' },
  { labelValue: 'author', label: '저자', placeholder: '저자를 입력하세요.' },
  { labelValue: 'publisher', label: '출판사', placeholder: '출판사를 입력하세요.' },
  { labelValue: 'bookNumber', label: '책번호', placeholder: '책번호를 기입하세요' },
];

const groupData = [
  { groupValue: 'T', group: 'T' },
  { groupValue: 'A', group: 'A' },
  { groupValue: 'M', group: 'M' },
  { groupValue: 'N', group: 'N' },
  { groupValue: 'a', group: 'a' },
];

const AdminBookDetailInfo = ({ newBook, setNewBook }) => {
  const handleInputChange = ({ name, value }) => {
    setNewBook({ ...newBook, [name]: value });
  };

  const handleImageChange = (event) => {
    const [selectedImage] = event.target.files;
    const imageUrl = URL.createObjectURL(selectedImage);
    setNewBook((newBook) => ({ ...newBook, imageUrl }));

    if (newBook.imageUrl) {
      URL.revokeObjectURL(newBook.imageUrl);
    }
  };

  return (
    <Style.BookDetailInfo>
      {labelData.map(({ labelValue, label, placeholder }) => {
        if (labelValue === 'title') {
          return (
            <label key={labelValue}>
              {label} :{''}
              <div>
                <input
                  type="text"
                  value={newBook[labelValue]}
                  placeholder={placeholder}
                  onChange={(e) => handleInputChange(e.target.value, labelValue)}
                />
                <button>검색</button>
              </div>
            </label>
          );
        }
        if (labelValue === 'bookNumber') {
          return (
            <label key={labelValue}>
              {label} :{''}
              <div>
                <select name="group">
                  {groupData.map(({ groupValue, group }) => {
                    return (
                      <option key={groupValue} value={groupValue}>
                        {group}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="text"
                  value={newBook[labelValue]}
                  placeholder={placeholder}
                  onChange={(e) => handleInputChange(e.target.value, labelValue)}
                />
              </div>
            </label>
          );
        }
        return (
          <label key={labelValue}>
            {label} :{''}
            <input
              type="text"
              value={newBook[labelValue]}
              placeholder={placeholder}
              onChange={(e) => handleInputChange(e.target.value, labelValue)}
            />
          </label>
        );
      })}
      <span>책 이미지 :</span>
      <input type="file" onChange={handleImageChange} accept="image/*" />
    </Style.BookDetailInfo>
  );
};

export default AdminBookDetailInfo;
