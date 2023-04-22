import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Setting from "./pages/Settings"
import About from "./pages/About"

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element = {<Home />}></Route>
        <Route path="/about" exact element = {<About />}></Route>
        <Route path="/settings" exact element = {<Setting />}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
