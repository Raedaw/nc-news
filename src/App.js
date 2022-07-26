import "../src/styles/App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  // useParams,
  // useSearchParams,
} from "react-router-dom";

import Nav from "./Components/Nav";
import Articles from "./Components/Articles/Articles";
import SingleArticle from "./Components/Articles/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Articles element={<Articles />} />} />
          <Route
            path="/articles"
            element={<Articles element={<Articles />} />}
          />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
        {/* <Articles /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
