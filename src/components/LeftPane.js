import BudgetInput from "./Budget-Input"
import ExpensesInput from "./Expense-Input"

export default function LeftPane() {
    return (
        <div className="left-pane">
            <BudgetInput />
            <ExpensesInput />
            <button className="save-budget">Save</button>
        </div>
    )
}
