import Table from '../../ui/Table';
import TableBody from '../../ui/TableBody';
import TableHead from '../../ui/TableHead';
import IncidentRow from './IncidentRow';

function IncidentTable({ incidents }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Id</th>
          <th>
            <span>Client&#47;Company</span>
          </th>
          <th>Subject</th>
          <th>
            <span>Status</span>
          </th>
          <th>
            <span>Prority</span>
          </th>
          <th>Deadline</th>
          <th>
            <span>Assignee</span>
          </th>
          <th>Updated</th>
        </tr>
      </TableHead>
      <TableBody
        data={incidents}
        render={(incident) => (
          <IncidentRow incident={incident} key={incident.id} />
        )}
      />
    </Table>
  );
}

export default IncidentTable;
