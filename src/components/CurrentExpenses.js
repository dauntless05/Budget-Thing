import CurrExpensesList from "./CurrExpensesList"

export default function CurrentExpenses(){
    return(
        <div className="current-expenses">
            <h2 className="current-expenses-title">Expenses:</h2>
            <div className="expenses-list">
                // expenses component generation
                <CurrExpensesList />
            </div>   
        </div>

    )
}
