export default function DataTable({ rows }) {
  if (!rows.length) return null;
  return (
    <table border="1">
      <thead>
        <tr>
          {Object.keys(rows[0]).map(col => <th key={col}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            {Object.values(row).map((val, i) => <td key={i}>{val}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
