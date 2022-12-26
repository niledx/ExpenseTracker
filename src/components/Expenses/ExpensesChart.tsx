import React, { FC, SetStateAction } from 'react'
import Chart from '../Chart/Chart'

type expensesType = {
	id: React.Key;
	title: string;
	amount: number;
	date: Date;
};

interface Props {
    expenses: {
        id: React.Key;
		title: string;
		amount: number;
		date: Date;
    }[];
    setFilterExpenses: React.Dispatch<SetStateAction<expensesType[]>>;
}

const ExpensesChart:FC<Props> = ({expenses, setFilterExpenses}) => {
  
    const chartDataPoints = [
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0}
    ];

    for(const expense of expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    
    return (
        <>
        <Chart dataPoints={chartDataPoints} setFilterExpenses={setFilterExpenses} expenses={expenses}/>
        <p>Click on bar for particular month's data</p>
        </>
    )
}

export default ExpensesChart