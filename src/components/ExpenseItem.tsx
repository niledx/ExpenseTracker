import './ExpenseItem.css';
import { FC } from 'react';
import ExpenseDate from './ExpenseDate';

interface Props {
	title: string;
	amount: number;
	date: Date;
}

const ExpenseItem: FC<Props> = ({ title, amount, date }) => {
	return (
		<div className="expense-item">
			<div>
				<ExpenseDate date={date} />
			</div>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{amount}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
