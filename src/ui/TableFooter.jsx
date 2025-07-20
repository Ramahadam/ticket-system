export function TableFooter({ children }) {
  return (
    <tfoot>
      <tr>
        <td colSpan="100%">{children}</td>
      </tr>
    </tfoot>
  );
}
