import React from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";
import SideComponent from "./SideComponent";

const Projects = () => {
  const data = [
    {
      name: "dis A",
      qu: 1400,
      amt: 2400,
    },
    {
      name: "dis B",
      qu: 1398,
      amt: 2210,
    },
    {
      name: "dis C",
      qu: 2000,
      amt: 2290,
    },
    {
      name: "dis D",
      qu: 2908,
      amt: 2000,
    },
    {
      name: "dis E",
      qu: 3000,
      amt: 2181,
    },
    {
      name: "dis F",
      qu: 2800,
      amt: 2500,
    },
    {
      name: "dis G",
      qu: 2000,
      amt: 2100,
    },
  ];
  const data2 = [
    {
      name: "dis A",
      qu: 2400,
      amt: 2400,
    },
    {
      name: "dis B",
      qu: 1398,
      amt: 2210,
    },
    {
      name: "dis C",
      qu: 9800,
      amt: 2290,
    },
    {
      name: "dis D",
      qu: 3908,
      amt: 2000,
    },
    {
      name: "dis E",
      qu: 4800,
      amt: 2181,
    },
    {
      name: "dis F",
      qu: 3800,
      amt: 2500,
    },
    {
      name: "dis G",
      qu: 4300,
      amt: 2100,
    },
  ];
  const data3 = [
    {
      name: "dis A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "dis B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "dis C",
      uv: -1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "dis D",
      uv: 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "dis E",
      uv: -2000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "dis F",
      uv: -250,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "dis G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();
  return (
    <>
      <Nav />
      <SideBar />
      <div className="container">
        <div className="wrapper">
          <div className="chart__wrapper">
            <h1>Forecasted quantity of goods to ship this coming month:</h1>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="qu"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart__wrapper">
            <h1>Quantity of goods shipped last month:</h1>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart
                width={500}
                height={300}
                data={data2}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="qu" fill="#8884d8" />
                <Bar fill="#24242400" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart__wrapper1">
            <h1>Year-to-date average goods shipped per month.</h1>
            <ResponsiveContainer width="100%" height="70%">
              <AreaChart
                width={500}
                height={400}
                data={data3}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <defs>
                  <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset={off} stopColor="green" stopOpacity={1} />
                    <stop offset={off} stopColor="red" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#000"
                  fill="url(#splitColor)"
                  />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <SideComponent />
      </div>
    </>
  );
};

export default Projects;
