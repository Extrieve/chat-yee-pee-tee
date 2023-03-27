import React, { useState } from 'react';

function Selector({ options, onSelect }) {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.trim() === '') {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && filteredOptions.length === 0) {
      onSelect(inputValue);
      setInputValue('');
    }
  };

  const handleSelect = (option) => {
    onSelect(option);
    setInputValue('');
    setFilteredOptions(options);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <ul>
        {filteredOptions.map((option) => (
          <li key={option} onClick={() => handleSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}