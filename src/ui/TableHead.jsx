function TableHead() {
  return (
    <thead className="bg-bg-light-gray">
      <tr>
        <td className="p-4 rounded-tl-md">Id</td>
        <td className="p-4">
          <span>Client&#47;Company</span>
        </td>
        <td className="p-4">Subject</td>
        <td className="p-4">
          <span>Status</span>
        </td>
        <td className="p-4">
          <span>Priority</span>
        </td>
        <td className="p-4">Deadline</td>
        <td className="p-4">
          <span>Assignee</span>
        </td>
        <td className="p-4">Updated</td>
      </tr>
    </thead>
  );
}

export default TableHead;
