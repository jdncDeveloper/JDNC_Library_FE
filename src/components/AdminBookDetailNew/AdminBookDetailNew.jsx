import React, { useState } from 'react';
import Style from '../AdminBookDetailInfo/AdminBookDetailForm.style';

const AdminBookDetailNew = ({
  newBook,
  setNewBook,
  labelData,
  groupData,
  onImageChange,
  openModal,
}) => {
  const [fileValue, setFileValue] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(newBook?.image);

  const handleInputChange = ({ name, value }) => {
    setNewBook((newBook) => ({ ...newBook, [name]: value }));
  };

  const handleFileChange = (e) => {
    onImageChange(e);
    setPreviousUrl(newBook?.image);
    setFileValue(e.target.value[0]);
  };

  const clearFileSelection = () => {
    handleInputChange({ name: 'image', value: previousUrl });
    setFileValue(null);
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
                <button onClick={openModal}>검색</button>
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
                      <option key={groupValue} value={bookGroup}>
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
        if (labelValue === 'image') {
          return (
            <label key={labelValue}>
              {label} :{''}
              <Style.ImageInputWrapper>
                <input
                  type="text"
                  value={newBook[labelValue]}
                  placeholder={placeholder}
                  onChange={(e) => handleInputChange({ name: labelValue, value: e.target.value })}
                />
                <div>
                  <input type="file" onChange={handleFileChange} accept="image/*" />
                  {fileValue && (
                    <button type="button" onClick={clearFileSelection}>
                      선택취소
                    </button>
                  )}
                </div>
              </Style.ImageInputWrapper>
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
    </Style.BookDetailInfo>
  );
};

export default AdminBookDetailNew;
