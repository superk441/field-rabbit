import * as React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#A3A0FB', '#55D8FE', '#FF8373', '#FFDA83'];

class PieChartWithPaddingAngle extends React.PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={55}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                    >
                        {
                            data.map((entry, index) =>
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            )
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        )
    }
}

export default PieChartWithPaddingAngle;