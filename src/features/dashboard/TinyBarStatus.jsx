import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export default function TinyBarStatus({ data, lable }) {
  return (
    <div style={{ width: '40rem', height: 200 }}>
      <h2 className="my-5">Status for &nbsp;{lable}</h2>
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
          <YAxis tickFormatter={(val) => Math.round(val)} />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
