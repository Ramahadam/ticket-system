import ChartBartStatus from './ChartBarStatus';
import TinyBarStatus from './TinyBarStatus';

function Status() {
  return (
    <article className="w-[40rem]">
      <h2>Status for incidents</h2>

      <TinyBarStatus />
      {/* <ChartBartStatus /> */}
    </article>
  );
}

export default Status;
