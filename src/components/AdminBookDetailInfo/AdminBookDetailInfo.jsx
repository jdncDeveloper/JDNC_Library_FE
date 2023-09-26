import React from 'react';
import Style from './AdminBookDetailForm.style';

const AdminBookDetailInfo = ({
  selectedBook,
  setSelectedBook,
  labelData,
  groupData,
  openModal,
}) => {
  const handleInputChange = ({ name, value }) => {
    setSelectedBook((selectedBook) => ({ ...selectedBook, [name]: value }));
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
                  value={selectedBook[labelValue]}
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
                  value={selectedBook?.bookGroup}
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
              <input
                type="text"
                value={selectedBook?.[labelValue] ?? ''}
                placeholder={placeholder}
                onChange={(e) => handleInputChange({ name: labelValue, value: e.target.value })}
              />
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
