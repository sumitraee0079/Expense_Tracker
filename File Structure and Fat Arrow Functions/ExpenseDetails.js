import './ExpenseDetails.css'

const ExpenseDetails = (props) => {
    const title = props.title
    const amount = props.amount
    const LocationOfExpenditure = props.LocationOfExpenditure

    return (
        <div className="expense-details">
        <div>{title}</div>
        <div>{amount}</div>
        <div>{LocationOfExpenditure}</div>
    </div>
    )
}

export default ExpenseDetails
