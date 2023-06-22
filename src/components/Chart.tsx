import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from "recharts";

import { useState } from "react";

const Chart = () => {
    const status:any = localStorage.getItem('transactions');
    const [data, setData] = useState(status===''?[]:JSON.parse(status));
    

    return (
        <div>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="color" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
                
            </BarChart>
        </div>
    );
};

export default Chart;
