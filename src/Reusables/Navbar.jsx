import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <div className="navi">
      <div className="logo"></div>
      <div className="links">
        <ul className="linksul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
        </ul>
      </div>

    </div>
   );
}
 
export default Navbar;