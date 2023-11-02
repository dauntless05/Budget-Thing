import logo from '../images/logo.png'
export default function Navbar(){
    return (
        <div className="navbar">
	       <div className="nav-left">
	           <img src={logo} alt="logo" className="logo-img"/> 
	           <h1 className="title">Budget Thing</h1> 
	       </div>
	       <div className="nav-right">
	           <h2><a href="/create">Create</a></h2>
	           <h2><a href="/history">History</a></h2>
	       </div> 
        </div>
    )
}
