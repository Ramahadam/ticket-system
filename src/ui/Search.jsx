// import styles from './Search.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Search() {
  return (
    <form className="flex items-center justify-between bg-white w-[30rem] min-w-fit p-4 rounded-[20px] focus-within:shadow-[0_0_0_2px_var(--color-primary)]">
      <input
        type="text"
        placeholder="Search for a ticket"
        autoFocus
        className="font-inherit border-none outline-none w-full text-lg pr-2"
      />
      <FontAwesomeIcon icon={faSearch} />
    </form>
  );
}

export default Search;
