import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";

function App() {
  return (
    <Router basename="/react-task">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/js/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;