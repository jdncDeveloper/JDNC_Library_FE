import React from 'react';
import Style from '../AdminBookDetailInfo/AdminBookDetailForm.style';

const AdminBookDetailNew = ({ newBook, setNewBook, labelData, groupData, onImageChange }) => {
  const handleInputChange = ({ name, value }) => {
    setNewBook((newBook) => ({ ...newBook, [name]: value }));
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
                  name={labelValue}
                  id={labelValue}
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
                <select
                  name="group"
                  onChange={(e) => handleInputChange({ name: 'bookGroup', value: e.target.value })}
                >
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
                  name={labelValue}
                  id={labelValue}
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
              name={labelValue}
              id={labelValue}
              value={newBook[labelValue]}
              placeholder={placeholder}
              onChange={(e) => handleInputChange({ name: labelValue, value: e.target.value })}
            />
          </label>
        );
      })}
      <span>책 이미지 :</span>
      <input type="file" onChange={onImageChange} accept="image/*" />
    </Style.BookDetailInfo>
  );
};

export default AdminBookDetailNew;
