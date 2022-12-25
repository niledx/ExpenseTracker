import React, { ChangeEvent, FC, SetStateAction } from 'react';
import './ExpenseFilter.css';

interface Props {
	pickedYear: string;
	setPickedYear: React.Dispatch<SetStateAction<string>>;
}

const ExpenseFilter: FC<Props> = ({ pickedYear,setPickedYear }) => {
	const filterHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		setPickedYear(e.target.value);
	};
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={pickedYear} onChange={filterHandler}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
