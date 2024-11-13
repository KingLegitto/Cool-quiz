import LandPg from "./LandPg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandPg/>}>
            
          </Route>
            
        </Routes>
        
      </Router>
      
  );
}

export default App;
