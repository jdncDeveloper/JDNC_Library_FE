import React, { useState } from 'react';
import Style from './GroupTap.style';

const GroupTap = () => {
  const [selectedTap, setSelectedTap] = useState('tab1');

  const handleTapChange = (event) => {
    const newSelectedTap = event.target.id;
    setSelectedTap(newSelectedTap);
  };

  const tabData = [
    { id: 'tab1', label: 'T' },
    { id: 'tab2', label: 'A' },
    { id: 'tab3', label: 'M' },
    { id: 'tab4', label: 'N' },
    { id: 'tab5', label: 'a' },
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
