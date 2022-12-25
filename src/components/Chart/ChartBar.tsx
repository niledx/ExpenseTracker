import React, { FC } from 'react';
import './ChartBar.css';

interface Props {
	value: Number;
	maxValue: Number;
	label: String;
}

const ChartBar: FC<Props> = ({ value, maxValue, label }) => {
	let barFillHeight: string = '0%';

	if (maxValue > 0) {
		barFillHeight = Math.round((value.valueOf() / maxValue.valueOf()) * 100) + '%';
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div className="chart-bar__fill" style={{ height: barFillHeight }} />
			</div>
			<div className="chart-bar__label">{label}</div>
		</div>
	);
};

export default ChartBar;
