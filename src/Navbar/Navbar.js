import {Link, link} from 'react-router-dom'; 
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog-Port</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;