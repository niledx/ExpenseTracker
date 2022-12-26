import React, { FC, SetStateAction } from 'react';
import './ChartBar.css';

type expensesType = {
	id: React.Key;
	title: string;
	amount: number;
	date: Date;
};

interface Props {
	value: Number;
	maxValue: Number;
	label: String;
    expenses: expensesType[];
    setFilterExpenses: React.Dispatch<SetStateAction<expensesType[]>>
}

const ChartBar: FC<Props> = ({ value, maxValue, label, expenses, setFilterExpenses }) => {
	let barFillHeight: string = '0%';

	if (maxValue > 0) {
		barFillHeight = Math.round((value.valueOf() / maxValue.valueOf()) * 100) + '%';
	}

    const handleMonthFilter = () => {
        setFilterExpenses(expenses.filter(expense => expense.date.toLocaleString('en-US', { month: 'short' }) === label))
    }

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner" onClick={handleMonthFilter}>
				<div className="chart-bar__fill" style={{ height: barFillHeight }} />
			</div>
			<div className="chart-bar__label">{label}</div>
		</div>
	);
};

export default ChartBar;
