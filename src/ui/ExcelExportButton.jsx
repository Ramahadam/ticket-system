import Button from './Button';
import { exportToExcel } from '../utils/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

function ExcelExportButton({ data, fileName }) {
  return (
    <Button onClick={() => exportToExcel(data, fileName)} className="border">
      <FontAwesomeIcon
        icon={faFileExcel}
        className="text-dark-green text-3xl"
      />
      <span>Export to excle</span>
    </Button>
  );
}

export default ExcelExportButton;
