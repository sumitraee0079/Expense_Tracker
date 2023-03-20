import ExpenseItem from './components/ExpenseItem'

const App = () => {
    const expenses = [
        { title: 'Car Insurance', amount: 294.27, date: new Date(2021, 2, 21), LocationOfExpenditure: 'Car'},
        { title: 'A4 Sheets', amount: 24.27, date: new Date(2022, 2, 23), LocationOfExpenditure: 'Paper'},
        { title: 'Novels', amount: 94, date: new Date(2023, 1, 26), LocationOfExpenditure: 'Book'},
        { title: 'Groceries', amount: 294, date: new Date(2021, 2, 20), LocationOfExpenditure: 'Food'}
    ]

    const list = []

  expenses.forEach((element) => {
    list.push(<ExpenseItem
            title={expenses[element].title}
            amount={expenses[element].amount}
            date={expenses[element].date}
            LocationOfExpenditure={expenses[element].LocationOfExpenditure}
            ></ExpenseItem>)
  })

    return (
        <div>
            {list}
        </div>
    )
}



export default App
