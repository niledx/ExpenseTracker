import React, { FC, SetStateAction } from 'react';

interface Props {
	setIsOpen: React.Dispatch<SetStateAction<Boolean>>;
}

const AddExpenseBtn: FC<Props> = ({ setIsOpen }) => {
	const handleClick = () => {
		setIsOpen(true);
	};
	return <button onClick={handleClick}>Add Expense</button>;
};

export default AddExpenseBtn;
