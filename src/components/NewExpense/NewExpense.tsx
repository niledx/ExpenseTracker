import React, { FC, SetStateAction, useState } from 'react';
import AddExpenseBtn from './AddExpenseBtn';
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
	const [isOpen, setIsOpen] = useState<Boolean>(false);

    if(isOpen){
        return (
            <div className="new-expense">
                <ExpenseForm expenses={expenses} setExpenses={setExpenses} setIsOpen={setIsOpen}/>
            </div>
        );
    }

    if(!isOpen){
        return (
            <div className="new-expense">
                <AddExpenseBtn setIsOpen={setIsOpen}/>
            </div>
        )
    }

    return <></>
};

export default NewExpense;
