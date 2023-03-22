import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [{
  id: 1,
  title: 'Car Insurance',
  price: 294.67,
  date: new Date(2021, 2, 23)
}, 
{
  id: 2,
  title: 'Bike Insurance',
  price: 292.67,
  date: new Date(2021, 2, 25)
},
{
  id: 3,
  title: 'Medical Insurance',
  price: 394.67,
  date: new Date(2022, 2, 23)
}]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses) => {
    return [...prevExpenses, expense]
  })
}



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}></Expenses>

    </div>
  );
}

export default App;
