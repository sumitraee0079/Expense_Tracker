import React, { useState } from 'react' 
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
    })

    
    
     return <div>
        
    <li>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>

    <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
    <ExpenseList items={filteredExpenses}></ExpenseList>
    
    
    
    </Card></li>
    </div>
    
}

export default Expenses
