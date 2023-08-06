import { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css"
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const SideComponent = () => {
    const data = [
        {
          subject: 'Lorem1',
          A: 120,
          B: 110,
          fullMark: 150,
        },
        {
          subject: 'Lorem2',
          A: 98,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Lorem3',
          A: 86,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Lorem4',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Lorem5',
          A: 85,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'Lorem6',
          A: 65,
          B: 85,
          fullMark: 150,
        },
      ];
    const [value, onChange] = useState(new Date());
    return (
        <div className='calender__wrapper hide'>
        <Calendar className={'calendar'} onChange={onChange} value={value} />
        <ResponsiveContainer width="100%" height="50%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Lorem" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lorem" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    );
};

export default SideComponent;