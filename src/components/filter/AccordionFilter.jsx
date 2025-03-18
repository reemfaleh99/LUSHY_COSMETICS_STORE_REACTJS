import { useState } from "react";
import Slider from "react-slider";

const AccordionFilter = ({ items, onBrandChange, depts, onPriceChange }) => {
  const MIN = 10;
  const MAX = 200;

  const [activeIndex, setActiveIndex] = useState(null);
  const [priceValue, setPriceValue] = useState([MIN, MAX]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDepts, setSelectedDepts] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleBrandChange = (brand) => {
    let updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
    onBrandChange(updatedBrands);
  };

  const handleDeptChange = (dept) => {
    let updatedDepts = selectedDepts.includes(dept)
      ? selectedDepts.filter((b) => b !== dept)
      : [...selectedDepts, dept];

    setSelectedDepts(updatedDepts);
    depts(updatedDepts);
  };

  const handlePriceChange = (price) => {
    setPriceValue(price);
    onPriceChange(price);
  };

  return (
    <div className="w-full md:w-1/3 right-0 absolute top-0 z-50 overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="border-b overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full px-4 text-lg font-medium text-left bg-green-200 hover:bg-green-300 focus:outline-none h-24"
          >
            {item.title}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              activeIndex === index
                ? "max-h-[300px] overflow-y-auto"
                : "max-h-0"
            }`}
          >
            <div className="px-4 py-2 bg-green-100">
              {item.filterItems &&
                item.filterItems.map((filterItem, idx) => (
                  <div key={idx} className="flex items-center mx-5 my-2">
                    {item.id === 2 || item.id === 7 ? (
                      <input
                        type="checkbox"
                        id={filterItem.path}
                        className="mr-2"
                        checked={selectedBrands.includes(filterItem.name)}
                        onChange={() => handleBrandChange(filterItem.name)}
                      />
                    ) : item.id === 3 || item.id === 8 ? (
                      <input
                        type="checkbox"
                        id={filterItem.path}
                        className="mr-2"
                        checked={selectedDepts.includes(filterItem.name)}
                        onChange={() => handleDeptChange(filterItem.name)}
                      />
                    ) : item.id === 4 || item.id === 9 ? (
                      <input
                        type="checkbox"
                        id={filterItem.path}
                        className="mr-2"
                        checked={selectedDepts.includes(filterItem.name)}
                        onChange={() => handleDeptChange(filterItem.name)}
                      />
                    ) : item.id === 10 ? (
                      <input
                        type="checkbox"
                        id={filterItem.path}
                        className="mr-2"
                        checked={selectedDepts.includes(filterItem.name)}
                        onChange={() => handleDeptChange(filterItem.name)}
                      />
                    ) : null}

                    <label
                      htmlFor={filterItem.path}
                      className="text-gray-700 text-lg font-medium hover:text-green-500 transition duration-200"
                    >
                      {filterItem.name}
                    </label>
                  </div>
                ))}

              {item.id === 5 || item.id === 11 ? (
                <div key={index} className="flex items-center mx-5 my-2">
                  <p>Price Range</p>
                  <div>
                    ${priceValue[0]} - ${priceValue[1]}
                  </div>
                  <small>Current range: ${priceValue[1] - priceValue[0]}</small>
                  <Slider
                    className="slider rounded-full bg-green-500"
                    min={MIN}
                    max={MAX}
                    onChange={handlePriceChange}
                    value={priceValue}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionFilter;
