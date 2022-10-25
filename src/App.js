import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>nice</div>} />
        <div>nice</div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <li></li>
    </div> */
}
