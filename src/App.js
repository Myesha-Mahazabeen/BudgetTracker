import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='text-center mt-4 mb-3'>My Budget Planner</h1>
				<div className='row'>
					<div className='col-md-4 mb-3'>
						<Budget />
					</div>
					<div className='col-md-4 mb-3'>
						<RemainingBudget />
					</div>
					<div className='col-md-4 mb-3'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-4'>Expenses</h3>
				<ExpenseList />
				<h3 className='mt-4'>Add Expense</h3>
				<AddExpenseForm />
			</div>
		</AppProvider>
	);
};

export default App;
