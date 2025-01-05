import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import CurrentDate from '../../ui/CurrentDate';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function IncidentsOperation() {
  const options = [
    {
      label: 'loged',
      value: 'loged',
    },
    {
      label: 'progress',
      value: 'progress',
    },
    {
      label: 'hold',
      value: 'hold',
    },
    {
      label: 'fulfiled',
      value: 'fulfiled',
    },
  ];

  const sortOptions = [
    {
      label: 'Sort by status asc',
      value: 'status-asc',
    },
    {
      label: 'Sort by status desc',
      value: 'status-desc',
    },
    {
      label: 'Sort by priority asc',
      value: 'priority-asc',
    },
    {
      label: 'Sort by priority desc',
      value: 'priority-desc',
    },
  ];

  return (
    <div className="flex justify-between bg-white min-h-[6.9rem] max-w-[1051px] p-4 mt-[4.4rem] mx-auto rounded-2xl border border-bg-gray font-medium">
      <CurrentDate />

      <div className="flex items-center justify-end gap-8 relative">
        <Filter
          btnType="btnOutline"
          ticketType="incidents"
          options={options}
          filterColumn="status"
        />

        <SortBy options={sortOptions} />

        <Button className="btn btn--primary text-xl">
          <Link to="new">
            <FontAwesomeIcon icon={faPlus} className="icon" />
            <span>New</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default IncidentsOperation;
