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

    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/query/?area=${area}`);
      const data = res.data;
      console.log("Response Data:", data);

      setSummary(data.summary);
      setChartData(
        data.chart_data.labels.map((year, i) => ({
          year,
          price: data.chart_data.prices[i],
        }))
      );
      setTableData(data.table_data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Input Your Query</h2>
      <QueryInput onQuery={handleQuery} />
      <h2>Summary: {summary}</h2>
      <PriceChart data={chartData} />
      <DataTable rows={tableData} />
    </div>
  );
}

export default App;
