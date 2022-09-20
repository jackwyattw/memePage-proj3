//Styles
import "./App.css";
// Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Four04 from "./pages/Four04";

function App() {
    const URL = "https://api.imgflip.com/get_memes";
    const URL2 = "https://meme-project3.herokuapp.com";


  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home URL={`${URL}`}/>} />
        <Route exact path="/createpost" element={<CreatePost URL2={`${URL2}`}/>}/>
        <Route exact path = "/*" element={<Four04 />}/>
      </Routes>
    </div>
  );
}

export default App;
