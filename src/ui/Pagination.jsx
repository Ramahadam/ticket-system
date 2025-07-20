import { useSearchParams } from 'react-router-dom';
import Button from './Button';
import { PAGE_SIZE } from '../utils/constant';

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageCount = Math.ceil(count / PAGE_SIZE); // Calculating number of pages

  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  if (count <= PAGE_SIZE) return;

  return (
    <div className=" flex justify-evenly items-center p-4">
      <p>
        Showing results <span>{(currentPage - 1) * PAGE_SIZE + 1} </span> to
        &nbsp;
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>
        &nbsp; out of
        <span> {count}</span> results
      </p>
      <div className="flex gap-4">
        <Button className="bg-light-gray" onClick={prevPage}>
          Previouse
        </Button>
        <Button className="bg-light-gray" onClick={nextPage}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
