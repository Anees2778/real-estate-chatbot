import { useState } from "react";
import axios from "axios";
import QueryInput from "./components/QueryInput";
import PriceChart from "./components/PriceChart";
import DataTable from "./components/DataTable";
function App() {
  const [summary, setSummary] = useState("");
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleQuery = async (query) => {
    const area = query.split(" ").pop();
    const res =axios.axios.get(`http://127.0.0.1:8000/api/query/?area=${area}`)
        .then(response => {
          console.log('Data:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

    // const res = await axios.get(`http://127.0.0.1:8000/api/query/?area=${area}`);

    setSummary(res.data.summary);
    setChartData(res.data.chart_data.labels.map((year, i) => ({
      year,
      price: res.data.chart_data.prices[i]
    })));
    setTableData(res.data.table_data);
  };

  return (
    <div>
      <h2>Input Your Query</h2>
      <QueryInput onQuery={handleQuery} />
      <h2>Summery : {summary}</h2>
      <PriceChart data={chartData} />
      <DataTable rows={tableData} />
      
    </div>
  );
}
export default App;
