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

  useEffect(() => {
    // localStorage.removeItem("save");
    let save = JSON.parse(localStorage.getItem("save"));
    if (save) setCount(save);
    // let newSave = {
    //   count: 20,
    // };
    // let jsonSave = JSON.stringify(newSave);
    // localStorage.setItem("save", jsonSave);
    // let gotSave = JSON.parse(localStorage.getItem("save"));
    // setCount(gotSave.count);
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
