// import styles from './Table.module.css';
import Pagination from './Pagination';
import TableBody from './TableBody';
import { TableFooter } from './TableFooter';
import TableHead from './TableHead';

function Table({ data, count }) {
  return (
    <table className="table-auto bg-white w-full">
      <TableHead />
      <TableBody data={data} />
      <TableFooter>
        <Pagination count={count} />
      </TableFooter>
    </table>
  );
}

export default Table;
