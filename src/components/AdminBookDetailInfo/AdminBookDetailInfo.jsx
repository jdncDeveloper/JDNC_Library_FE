import React, { useState } from 'react';
import Style from './AdminBookDetailForm.style';

const AdminBookDetailInfo = ({
  selectedBook,
  setSelectedBook,
  labelData,
  groupData,
  onImageChange,
}) => {
  const [fileValue, setFileValue] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(selectedBook?.image);

  const handleFileChange = (e) => {
    onImageChange(e);
    setPreviousUrl(selectedBook?.image);
    setFileValue(e.target.files[0]);
  };

  const handleInputChange = ({ name, value }) => {
    setPreviousUrl(value);
    if (selectedBook) {
      setSelectedBook((selectedBook) => ({ ...selectedBook, [name]: value }));
    }
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
                  value={selectedBook?.title ?? ''}
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
                      <option key={groupValue} value={bookGroup}>
                        {bookGroup}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="text"
                  value={selectedBook?.bookNumber ?? ''}
                  placeholder={placeholder}
                  onChange={(e) => handleInputChange({ name: 'bookNumber', value: e.target.value })}
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
                  value={selectedBook?.[labelValue] ?? ''}
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
              value={selectedBook?.[labelValue] ?? ''}
              placeholder={placeholder}
              onChange={(e) => handleInputChange({ name: labelValue, value: e.target.value })}
            />
          </label>
        );
      })}
    </Style.BookDetailInfo>
  );
};

export default AdminBookDetailInfo;
