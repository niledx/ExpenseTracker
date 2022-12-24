import './ExpenseItem.css';
import { FC, useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

interface Props {
	title: string;
	amount: number;
	date: Date;
}

const ExpenseItem: FC<Props> = ({ title, amount, date }) => {
	const [titleState, setTitle] = useState(title);
	const handleClick = () =>{
		setTitle('Updated!')
	}
	return (
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{titleState}</h2>
				<div className="expense-item__price">{amount}</div>
			</div>
			<button onClick={handleClick}>Click</button>
		</Card>
	);
};

export default ExpenseItem;
