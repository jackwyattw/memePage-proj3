import { Link } from "react-router-dom";

function Nav(props) {
  
    return (
    <div>
        <nav>
            <Link to="/">
            <div>Explore</div>
            </Link>
            <Link to="/create">
            <div>Create</div>
            </Link>
        </nav>
    </div>
    );
  }
  
  export default Nav;