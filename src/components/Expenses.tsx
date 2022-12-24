import React from 'react';
import { FC } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

interface Props {
	expenses: {
		id: string;
		title: string;
		amount: number;
		date: Date;
	}[];
}

const Expenses: FC<Props> = ({expenses}) => {
	return (
		<div className='expenses'>
			<ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
			<ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
			<ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
			<ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
		</div>
	);
};

export default Expenses;
