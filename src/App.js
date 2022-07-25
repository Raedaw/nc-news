import "./App.css";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/articles/topics/:topic_slug" />
        </Routes>

        <Articles />
      </div>
    </BrowserRouter>
  );
}

export default App;
