import { Route, Switch, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { countState } from "../atoms";
import "../styles.css";
import HomePage from "../pages/HomePage";
import StorePage from "../pages/StorePage";
import AchievementsPage from "../pages/AchievementsPage";
import TabTitle from "../components/TabTitle";

export default function App() {
  const setCount = useSetRecoilState(countState);

  // on app start check if game progress was saved in localStorage and if so, use it
  useEffect(() => {
    let save = JSON.parse(localStorage.getItem("save"));
    if (save) setCount(save);
  }, []);

  return (
    <>
      <TabTitle />

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/achievements">Achievements</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/store">
          <StorePage />
        </Route>
        <Route path="/achievements">
          <AchievementsPage />
        </Route>
      </Switch>
    </>
  );
}
