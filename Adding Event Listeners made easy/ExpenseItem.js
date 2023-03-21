import React from 'react' 
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


    const clickHandler = () =>   {
        console.log('Clicked!!')
    }

    return (

        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__amount">Rs{props.amount}</div>
            </div>
            
                <button onClick={clickHandler}>Change Title</button>
            
        </Card>
    )


export default ExpenseItems
