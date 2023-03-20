import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItem = (props) => {
    return (

<div className='expense-item'>

<ExpenseDate date ={props.date} />

<ExpenseDetails amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}   title={props.title} />

</div>

)
    
  }
  
  export default ExpenseItem
