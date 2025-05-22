import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function PriceChart({ data }) {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
}