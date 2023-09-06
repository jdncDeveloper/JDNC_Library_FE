import React, { useState } from 'react';
import Style from './GroupTap.style';

const GroupTap = ({ bookGroup, setBookGroup }) => {
  const [selectedTap, setSelectedTap] = useState();

  const handleTapChange = (event) => {
    const newSelectedTap = event.target.id;
    setSelectedTap(newSelectedTap);
    setBookGroup(newSelectedTap);
  };

  const tabData = [
    { id: 'T', label: 'T' },
    { id: 'A', label: 'A' },
    { id: 'M', label: 'M' },
    { id: 'N', label: 'N' },
    { id: 'a', label: 'a' },
  ];

  return (
    <Style.Container>
      {tabData.map((tab) => (
        <Style.RadioContainer key={tab.id}>
          <Style.RadioInput
            type="radio"
            id={tab.id}
            checked={selectedTap === tab.id}
            onChange={handleTapChange}
          />
          <Style.RadioLabel htmlFor={tab.id}>{tab.label}</Style.RadioLabel>
        </Style.RadioContainer>
      ))}
    </Style.Container>
  );
};

export default GroupTap;
