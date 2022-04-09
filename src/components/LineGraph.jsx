import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Text } from 'recharts';

const data = [
    {
        name: 'Jan',
        health: 4000,
        education: 2400,
        climate: 2400,
    },
    {
        name: 'Feb',
        health: 3000,
        education: 1398,
        climate: 2210,
    },
    {
        name: 'Mar',
        health: 2000,
        education: 9800,
        climate: 2290,
    },
    {
        name: 'Apr',
        health: 2780,
        education: 3908,
        climate: 2000,
    },
    {
        name: 'May',
        health: 1890,
        education: 4800,
        climate: 2181,
    },
    {
        name: 'Jun',
        health: 2390,
        education: 3800,
        climate: 2500,
    },
    {
        name: 'Jul',
        health: 3490,
        education: 4300,
        climate: 2100,
    },
];


function LineGraph() {

    return (
        <div className="flex flex-col items-center">
        <h2 className="text-xl my-3 relative text-gray-200 bg-[#000011] p-2 md:p-1 xl:p-2 rounded-md card">🔥 Most Active Topics 🔥</h2>
        <AreaChart
          width={720}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 60,
            left: 30,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="health" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="education" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="climate" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
        </div>

    );
};

export default LineGraph;
