import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

interface Props {
	expenses: {
		id: React.Key;
		title: string;
		amount: number;
		date: Date;
	}[];
}

type expensesType = {
	id: React.Key;
	title: string;
	amount: number;
	date: Date;
};

const Expenses: FC<Props> = ({ expenses }) => {
	const [ pickedYear, setPickedYear ] = useState<string>('2022');
	const [ filteredExpenses, setFilteredExpesnes ] = useState<expensesType[]>(expenses);

	useEffect(()=>{
		setFilteredExpesnes(expenses.filter(expense => expense.date.getFullYear().toString() === pickedYear))
	}, [pickedYear, expenses]);

	// const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === pickedYear) 

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter pickedYear={pickedYear} setPickedYear={setPickedYear} />
				<ExpensesChart expenses={filteredExpenses} setFilterExpenses={setFilteredExpesnes}/>
				<ExpenseList filteredExpenses={filteredExpenses}/>
			</Card>
		</div>
	);
};

export default Expenses;
