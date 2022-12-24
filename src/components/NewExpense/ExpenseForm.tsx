import React, { FormEvent, useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	const [ title, setTitle ] = useState('');
	const [ amount, setAmount ] = useState('');
	const [ date, setDate ] = useState('');

	const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleAmountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setAmount(e.target.value);
	};
	const handleDateChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setDate(e.target.value);
	};

	const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const expesneData = {
			title,
			amount,
			date: new Date(date)
		};
		console.log(expesneData);
		setTitle('');
		setAmount('');
		setDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={title} onChange={handleTitleChange} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" value={amount} min="0.01" step="0.01" onChange={handleAmountChange} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={handleDateChange} />
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
