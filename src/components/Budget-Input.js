export default function BudgetInput(){
    return(
        <div className="budget-input">
           <h2>Budget</h2>
            <div>
                <input type="text" className="budget-inp" placeholder="Enter your budget..." />
            </div>
            <div>
                <button type="submit" className="budget-inp-submit">Insert</button> 
            </div>
        </div>
    )
}
