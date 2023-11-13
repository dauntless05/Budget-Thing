import logo from '../images/logo.png'
export default function Navbar(){
    return (
        <div className="navbar">
	       <div className="nav-left">
	           <img src={logo} alt="logo" className="logo-img"/> 
	           <h1 className="title">Budget Thing</h1> 
	       </div>
	       <div className="nav-right">
	           <a href="/create">Create</a>
	           <a href="/history">History</a>
	       </div> 
        </div>
    )
}
