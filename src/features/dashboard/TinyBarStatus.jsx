import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export default function TinyBarStatus({ data }) {
  return (
    <div style={{ width: '40rem', height: 200 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
          }}
          barSize={40}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 30, right: 20 }}
          />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3" />
          <Bar dataKey="total" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
