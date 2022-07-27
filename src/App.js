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
import { UserContext } from "./Contexts/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  console.log(user, "<<<< user in app");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
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
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
