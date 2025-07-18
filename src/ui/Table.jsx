// import styles from './Table.module.css';
import TableBody from './TableBody';
import TableHead from './TableHead';

function Table({ data }) {
  return (
    <table className="table-auto bg-white ">
      <TableHead />
      <TableBody data={data} />
    </table>
  );
}

export default Table;
