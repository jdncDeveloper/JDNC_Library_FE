import React from 'react';
import Style from './AdminBookDetailForm.style';

const AdminBookDetailInfo = ({ selectedBook, setSelectedBook, labelData, groupData }) => {
  const handleInputChange = ({ name, value }) => {
    if (selectedBook) {
      setSelectedBook({ ...selectedBook, [name]: value });
    }
  };

  const handleImageChange = (event) => {
    const [selectedImage] = event.target.files;
    const imageUrl = URL.createObjectURL(selectedImage);
    setSelectedBook((bookList) => ({ ...bookList, imageUrl }));

    if (selectedBook.imageUrl) {
      URL.revokeObjectURL(selectedBook.imageUrl);
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
                  value={selectedBook?.title || ''}
                  placeholder={placeholder}
                  onChange={(e) => handleInputChange({ name: 'title', value: e.target.value })}
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
                  {groupData.map(({ groupValue, bookGroup }) => {
                    return (
                      <option key={groupValue} value={groupValue}>
                        {selectedBook?.bookGroup || bookGroup}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="text"
                  value={selectedBook?.bookNumber || ''}
                  placeholder={placeholder}
                  onChange={(e) => handleInputChange({ name: 'title', value: e.target.value })}
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
              value={selectedBook?.[labelValue] || ''}
              placeholder={placeholder}
              onChange={(e) => handleInputChange({ name: 'title', value: e.target.value })}
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