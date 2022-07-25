import "./App.css";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles/Articles";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/articles/?topic=:topic_slug" />
          console.log(useParams())
        </Routes>

        <Articles />
      </div>
    </BrowserRouter>
  );
}

export default App;
