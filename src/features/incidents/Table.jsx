import TableHead from './TableHead';
import TableBody from './TableBody';
import ExcelExportButton from '../../ui/ExcelExportButton';
import Pagination from '../../ui/Pagination';
import { TableFooter } from '../../ui/TableFooter';

function Table({ incidents, count }) {
  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between ">
        <h2 className="text-xl font-bold mb-4">Incidents List</h2>
        <ExcelExportButton data={incidents} fileName="incidents" />
      </div>
      <table className="table-auto bg-white w-full">
        <TableHead />
        <TableBody incidents={incidents} />
        <TableFooter>
          <Pagination count={count} />
        </TableFooter>
      </table>
    </div>
  );
}

export default Table;
