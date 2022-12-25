import React, { FC, SetStateAction } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

interface Props {
	expenses: {
        id: string;
        title: string;
        amount: number;
        date: Date;
    }[];
	setExpenses: React.Dispatch<
		SetStateAction<
			{
				id: string;
				title: string;
				amount: number;
				date: Date;
			}[]
		>
	>;
}

const NewExpense: FC<Props> = ({ expenses, setExpenses }) => {
	return (
		<div className="new-expense">
			<ExpenseForm expenses={expenses} setExpenses={setExpenses} />
		</div>
	);
};

export default NewExpense;
