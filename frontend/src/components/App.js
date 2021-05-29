import { Route, Switch, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { countState, isSaveOnServerState } from "../atoms";
import "../styles.css";
import HomePage from "../pages/HomePage";
import StorePage from "../pages/StorePage";
import AchievementsPage from "../pages/AchievementsPage";
import SettingsPage from "../pages/SettingsPage";
import TabTitle from "../components/TabTitle";

export default function App() {
  const setCount = useSetRecoilState(countState);
  // const setIsSaveOnServer = useSetRecoilState(isSaveOnServerState);

  useEffect(() => {
    // startGame();
  }, []);

  // // ** on app start check if game progress exists on server, if so, use it **
  // useEffect(() => {
  //   async function fetchProgress() {
  //     const endpoint = `<host>/api/v1/progress`;
  //     const response = await fetch(endpoint);
  //     const progress = await response.json();
  //     return progress.click_count;
  //   }
  //   // ** DISABLED functionality **
  //   // const save = fetchProgress();
  //   // if(save) {
  //   //   setCount(save);
  //   //   setIsSaveOnServer(true);
  //   // }
  // });

  // ** on app start check if game progress object is in localStorage and if so, use it **
  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("save"));
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
          <li>
            <Link to="/settings">Settings</Link>
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
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
      </Switch>
    </>
  );
}

function startGame() {
  const user_key = JSON.parse(localStorage.getItem("user_key"));
  if (user_key) {
    const setCount = useSetRecoilState(countState);
    // const setIsSaveOnServer = useSetRecoilState(isSaveOnServerState);

    const saved_click_count = await fetchProgress(user_key);

    if (saved_click_count) {
      setCount(saved_click_count);
      // setIsSaveOnServer(true);
    }
  } else {
  }
}

async function fetchProgress(user_key) {
  const endpoint = `<host>/api/v1/progress/${user_key}/save`;
  const response = await fetch(endpoint);
  const save = await response.json();
  return save.click_count;
}
