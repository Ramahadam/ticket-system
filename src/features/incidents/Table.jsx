import TableHead from './TableHead';
import TableBody from './TableBody';

function Table({ incidents }) {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-xl font-bold mb-4">Incidents List</h2>
      <table className="table-auto bg-white ">
        <TableHead />
        <TableBody incidents={incidents} />
      </table>
    </div>
  );
}

export default Table;
