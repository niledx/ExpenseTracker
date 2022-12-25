import React, { FC } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

interface Props {
	filteredExpenses: {
		id: React.Key;
		title: string;
		amount: number;
		date: Date;
	}[];
}

const ExpenseList: FC<Props> = ({ filteredExpenses }) => {
	if (filteredExpenses.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses!</h2>;
	}

	if (filteredExpenses.length > 0) {
		return <ul>
			{filteredExpenses.length > 0 &&
				filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
						id={expense.id}
					/>
				))}
		</ul>;
	}
    return <></>
};

export default ExpenseList;
