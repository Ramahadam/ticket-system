import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';
// import styles from './Cards.module.css';
import {
  faClock,
  faEnvelopeOpen,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';

function Cards({ tickets }) {
  const open = tickets.filter((incident) => incident.status === 'loged').length;

  const pending = tickets.filter(
    (incident) => incident.status === 'progress'
  ).length;

  const close = tickets.filter(
    (incident) => incident.status === 'fulfiled'
  ).length;

  return (
    <div className="flex items-center gap-8 mb-20">
      <Card
        ticket="incidents"
        total={open}
        status="open"
        icon={<FontAwesomeIcon icon={faEnvelopeOpen} className="fa" />}
      />
      <Card
        ticket="incidents"
        total={pending}
        status="pending"
        icon={<FontAwesomeIcon icon={faClock} />}
      />
      <Card
        ticket="incidents"
        total={close}
        status="close"
        icon={<FontAwesomeIcon icon={faSquareCheck} />}
      />
    </div>
  );
}

export default Cards;
