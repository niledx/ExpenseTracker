import React, { FC } from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

interface Props {
	dataPoints: {
        value: number;
        label: string;
    }[];
}

const Chart: FC<Props> = ({ dataPoints }) => {
	const dataPointValue = dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...dataPointValue);
    return <div className="chart">{dataPoints.map((dataPoint) => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxValue} label={dataPoint.label} />)}</div>;
};

export default Chart;
