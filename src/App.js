import { Settings } from "@mui/icons-material";
import Sidenav from "./sidenav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import home from "./pages/Home"
import settings from "./pages/Settings"
import about from "./pages/About"

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element = {<home />}></Route>
        <Route path="/about" exact element = {<about />}></Route>
        <Route path="/settings" exact element = {<settings />}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
