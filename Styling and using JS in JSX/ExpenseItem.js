import './ExpenseItem.css'

const ExpenseItem = () => {

    const expenseDate = newDate(2021, 2, 28)
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 294.67
    const LocationOfExpenditure = 'Car'

    return <div className='expense-item'>
    <div>{expenseDate.toISOString()}</div>
    <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
    </div>
    <div className='expense-item__price'>Rs{expenseAmount}</div>
    <div>{LocationOfExpenditure}</div>

    </div>
    
  }
  
  export default ExpenseItem
