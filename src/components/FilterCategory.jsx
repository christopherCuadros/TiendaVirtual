// // ComboBox.js
// import { useState } from 'react';
import { Select, Option } from '@material-tailwind/react';
// import { ChevronDownIcon } from '@heroicons/react/solid';

const FilterCategory = () => {
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleSelect = (e) => {
//     const selectedValue = e.target.value;
//     const selectedOption = options.find(option => option.value === selectedValue);
//     setSelectedOption(selectedOption);
//     onSelect(selectedOption);
//   };

  return (
    <Select
      value={"....Filtrar ...."}
    //   onChange={handleSelect}
      className="w-full px-4 py-2 border rounded-md bg-blue-800 text-white"
    >
        <Option>Opcion 1</Option>
        <Option>Opcion 2</Option>
        <Option>Opcion 3</Option>
        <Option>Opcion 4</Option>
        <Option>Opcion 5</Option>
        <Option>Opcion 6</Option>
      {/* {options.map(option => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))} */}
    </Select>
  );
};

export default FilterCategory;
