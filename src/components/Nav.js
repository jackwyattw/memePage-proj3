import { Link } from "react-router-dom";
import LikedPosts from "../pages/LikedPosts"

function Nav(props) {
  
    return (
    <div class="main">
        <nav>
            <Link to="/">
            <div>HOME</div>
            </Link>
            <Link to="/likedposts">
            <div>Liked Posts</div>
            </Link>
        </nav>
    </div>
    );
  }
  
  export default Nav;