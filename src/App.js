//Styles
import "./App.css";
// Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import LikedPosts from "./pages/LikedPosts";
import Four04 from "./pages/Four04";

function App() {
    const URL = "https://meme-project3.herokuapp.com";
    const URL2 = "https://api.imgflip.com/get_memes";


  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home URL={`${URL}`}/>} />
        <Route exact path="/likedposts" element={<LikedPosts URL2={`${URL2}`}/>}/>
        <Route exact path = "/*" element={<Four04 />}/>
      </Routes>
    </div>
  );
}

export default App;
