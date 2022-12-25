import './ExpenseItem.css';
import { FC, useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

interface Props {
	id: React.Key;
	title: string;
	amount: number;
	date: Date;
}

const ExpenseItem: FC<Props> = ({ id, title, amount, date }) => {
	return (
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div key={id} className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">₹{amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
