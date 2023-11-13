import GraphUI from "./Graph-UI";
import CurrentExpenses from "./CurrentExpenses";

export default function RightPane(){
    return (
        <div className="right-pane">
            <GraphUI />
            <CurrentExpenses />
        </div>
    )
}
