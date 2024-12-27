// import styles from './Table.module.css';
import TableBody from './TableBody';
import TableHead from './TableHead';

function Table({ data }) {
  return (
    <table className="table-auto">
      <TableHead />
      <TableBody data={data} />
      {/* <TableBody data={data} styles={styles} /> */}
    </table>
  );
}

export default Table;
