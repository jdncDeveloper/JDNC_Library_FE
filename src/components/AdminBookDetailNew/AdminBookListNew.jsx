import React from 'react';
import Style from '../AdminBookDetailInfo/AdminBookDetailForm.style';

const AdminBookDetailNew = ({ newBook, setNewBook, labelData, groupData }) => {
  const handleInputChange = ({ name, value }) => {
    setNewBook((newBook) => ({ ...newBook, [name]: value }));
  };

  const handleImageChange = (event) => {
    const [selectedImage] = event.target.files;
    const imageUrl = URL.createObjectURL(selectedImage);

    if (newBook.imageUrl) {
      URL.revokeObjectURL(newBook.imageUrl);
    }
    setNewBook((newBook) => ({ ...newBook, imageUrl }));
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
                  onChange={(e) => handleInputChange({ name: labelValue, value: e.target.value })}
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
                        {bookGroup}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="text"
                  value={newBook[labelValue]}
                  placeholder={placeholder}
                  onChange={(e) => handleInputChange({ name: labelValue, value: e.target.value })}
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
              onChange={(e) => handleInputChange({ name: labelValue, value: e.target.value })}
            />
          </label>
        );
      })}
      <span>책 이미지 :</span>
      <input type="file" onChange={handleImageChange} accept="image/*" />
    </Style.BookDetailInfo>
  );
};

export default AdminBookDetailNew;
