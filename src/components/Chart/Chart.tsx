import React, { FC, SetStateAction } from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

type expensesType = {
	id: React.Key;
	title: string;
	amount: number;
	date: Date;
};
interface Props {
	dataPoints: {
		value: number;
		label: string;
	}[];
	setFilterExpenses: React.Dispatch<SetStateAction<expensesType[]>>;
	expenses: {
		id: React.Key;
		title: string;
		amount: number;
		date: Date;
	}[];
}

const Chart: FC<Props> = ({ dataPoints, expenses, setFilterExpenses }) => {
	const dataPointValue = dataPoints.map((dataPoint) => dataPoint.value);
	const maxValue = Math.max(...dataPointValue);
	return (
		<div className="chart">
			{dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={maxValue}
					label={dataPoint.label}
					setFilterExpenses={setFilterExpenses}
					expenses={expenses}
				/>
			))}
		</div>
	);
};

export default Chart;
