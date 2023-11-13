
export default function ExpensesInput(){
    return(
        <div className="expenses-input">
           <h2>Expenses</h2>
            <div>
                <input type="text" className="expenses-inp" placeholder="Enter expense title..." />
            </div>
            <div>
                <input type="text" className="expenses-inp" placeholder="Enter your expense..." />
            </div>
            <div>
                <button type="submit" className="expenses-inp-submit">Insert</button> 
            </div>
        </div>
    )
}
