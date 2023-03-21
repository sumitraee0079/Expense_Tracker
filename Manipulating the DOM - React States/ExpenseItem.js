import React, { useState } from 'react' 
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItems = (props) => {
    const [title, setTitle] = useState(props.title)
    const [amount, setAmount] = useState(props.amount)

    const clickHandler = () =>   {
        setTitle('Updated!!')
        console.log(title)
    }

    const changeAmountHandler = () => {
        setAmount('$100')
    }

    return (

        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
            
                <button onClick={clickHandler}>Change Title</button>
                <button onClick={changeAmountHandler}>Change Amount</button>
            
        </Card>
    )
}

export default ExpenseItems
