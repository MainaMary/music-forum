import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
     <h3>From Kenya to the World</h3>
     <Navbar />
     <HomePage />
     </div>
    </>
    
  );
}

export default App;
