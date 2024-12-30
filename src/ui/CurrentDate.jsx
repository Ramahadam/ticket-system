// import styles from './CurrentDate.module.css';

function CurrentDate() {
  let date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  date = date.toLocaleDateString('en-US', options);
  return (
    <div className="flex flex-col gap-3.5">
      <span className="font-normal">Date</span>
      <span className="font-normal text-md text-slate-500">
        Today is, {date}
      </span>
    </div>
  );
}

export default CurrentDate;
