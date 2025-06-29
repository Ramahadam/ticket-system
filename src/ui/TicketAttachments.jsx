import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { downloadFile } from '../apiServices/apiForStorage';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Message from './Message';

export default function TicketAttachments({ ticket }) {
  const { file } = ticket.at(0);
  const fileName = file?.split('/').pop();

  function handelDownload(e) {
    e.preventDefault();

    downloadFile(fileName);
  }

  if (!file) return <Message message="No attachement yet!!!" />;

  return (
    <a href={`${file}`} onClick={handelDownload}>
      <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
      <span>Download file</span>
    </a>
  );
}
