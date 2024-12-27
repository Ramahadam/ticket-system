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
      <span className="font-semibold">Date</span>
      <span className="font-normal text-sm">Today is, {date}</span>
    </div>
  );
}

export default CurrentDate;
