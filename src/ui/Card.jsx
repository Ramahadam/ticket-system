// import styles from './Card.module.css';

function Card({ ticket, status, total, icon = '' }) {
  const statusClasses = {
    open: 'text-[#007ace] bg-[#007ace33] z-[999]',
    pending: 'text-[#53d097] bg-[#53d09733]',
    close: 'text-[#fe9c7e] bg-[#fe9c7e33]',
  };

  return (
    <div className="bg-white w-[26rem] h-[9rem] p-4 flex flex-wrap items-center justify-between gap-8 rounded-lg">
      <div
        className={`relative flex justify-center items-center rounded-full w-[6rem] h-[6rem] text-3xl ${statusClasses[status]}`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-4 flex-wrap">
        <span className="block text-2xl font-normal capitalize">
          {status} {ticket}
        </span>
        <span className="text-[2.6rem] font-medium">{total}</span>
      </div>
    </div>
  );
}

export default Card;
