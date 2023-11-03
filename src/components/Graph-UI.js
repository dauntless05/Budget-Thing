
export default function Graph_UI(){
    return(
        <div className="graph-ui">
            <div className="graph-title">
                <h3><b>Savings</b></h3> 
                <p><b>$Savings</b></p>
            </div>
            <div className="graphs">
               <div className="savings-graph">
                    <div className="savings-bar"></div>
                    <div className="savings-title">
                       <p><b>Savings</b></p> 
                    </div>
                </div>
                <div className="expenses-graph">
                    <div className="expenses-bar"></div>
                    <div className="expenses-title">
                        <p><b>Expenses</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
