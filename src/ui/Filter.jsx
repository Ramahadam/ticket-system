// import styles from './Filter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faFilter } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFilterValues } from '../Context/FilterContext';

function Filter({
  btnType,
  ticketType,
  options,
  filterColumn, //status
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const { checkValues, setCheckValues } = useFilterValues();

  const menuFilterRef = useRef(null);

  function handelOutsidClick(e) {
    if (menuFilterRef.current && !menuFilterRef.current.contains(e.target)) {
      setShowFilterMenu(false);
    }
  }

  function handleCheckBox(e) {
    const value = e?.target?.value;
    !checkValues.includes(value)
      ? setCheckValues((feild) => [...feild, value])
      : setCheckValues(checkValues.filter((feild) => feild != value));

    searchParams.set(filterColumn, checkValues);
    setSearchParams(searchParams);
  }

  //state update needs to trigger a side effect (like updating the URL),
  useEffect(() => {
    const params = new URLSearchParams();
    checkValues.forEach((value) => {
      params.append(filterColumn, value);
    });
    setSearchParams(params);

    // Cleanup function
  }, [checkValues, filterColumn]);

  useEffect(() => {
    document.addEventListener('mousedown', handelOutsidClick);

    return () => document.removeEventListener('mousedown', handelOutsidClick);
  });

  const hanelClearFilter = () => {
    setCheckValues([]);
    setShowFilterMenu(false);
  };

  return (
    <div className="relative text-xl font-normal" ref={menuFilterRef}>
      <Button
        type={btnType}
        className="border border-gray-200"
        onClick={() => setShowFilterMenu(!showFilterMenu)}
      >
        <FontAwesomeIcon icon={faFilter} className="text-dark-gray" />
        <span>Filter</span>
      </Button>

      {showFilterMenu && (
        <form className="absolute z-[999] top-[70%] left-0 flex flex-col gap-4 bg-white w-[20rem] p-4 rounded-2xl  shadow-md ">
          <header className="font-medium flex justify-between items-center w-full border-b border-gray-200">
            <span>Filters</span>
            <Button onClick={() => setShowFilterMenu(false)}>
              <FontAwesomeIcon icon={faClose} />
            </Button>
          </header>

          {options.map((option) => {
            return (
              <div className="flex items-center gap-1" key={option.label}>
                <input
                  type="checkbox"
                  name={option.value}
                  value={option.value}
                  checked={checkValues.includes(option.value)}
                  onChange={(e) => handleCheckBox(e)}
                />
                <label
                  htmlFor={option.value}
                >{`${ticketType} ${option.label}`}</label>
              </div>
            );
          })}

          <Button
            type="btnAccent"
            isDisabled={!checkValues.length}
            onClick={hanelClearFilter}
          >
            Clear filter
          </Button>
        </form>
      )}
    </div>
  );
}

export default Filter;
