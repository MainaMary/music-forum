import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CreatePost from "./components/CreatePost";
import {
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <GlobalStyle />
    
    <div className="App">
     <h3>From Kenya to the World</h3>
     <Navbar />
     <Routes>

     <Route index path="/" element={<HomePage/>} />
     <Route  path="/create" element={< CreatePost/>} />
     </Routes>
     </div>
    
    
    
  
    </>
    
  );
}

export default App;
