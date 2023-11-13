import "./styles.css"
import Navbar from "./components/Navbar";
import GraphUI from "./components/Graph-UI";
// import BudgetInput from "./components/Budget-Input";
// import ExpensesInput from "./components/Expense-Input";
import LeftPane from "./components/LeftPane";
import CurrentExpenses from "./components/CurrentExpenses";
import RightPane from "./components/RightPane";

export default function App(){
    return(
        <>
            <Navbar />
            <div className="myPage">
                <LeftPane />
                <RightPane />
            </div>
        </>
    )
}
