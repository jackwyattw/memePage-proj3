import { Link } from "react-router-dom";

function Nav(props) {
  
    return (
    <div>
        <nav>
            <Link to="/">
            <div>HOME</div>
            </Link>
            <Link to="/createpost">
            <div>Create Post</div>
            </Link>
        </nav>
    </div>
    );
  }
  
  export default Nav;