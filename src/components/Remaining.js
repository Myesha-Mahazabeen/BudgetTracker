import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);
	const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
	const remaining = budget - totalExpenses;
	const percentage = ((totalExpenses / budget) * 100).toFixed(2);
	const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType} p-3`}>
			<span>Remaining: ${remaining}</span>
			<div className="progress mt-2">
				<div
					className={`progress-bar ${alertType}`}
					role="progressbar"
					style={{ width: `${percentage}%` }}
					aria-valuenow={percentage}
					aria-valuemin="0"
					aria-valuemax="100"
				>
					{percentage}%
				</div>
			</div>
		</div>
	);
};

export default RemainingBudget;
