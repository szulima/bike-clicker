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
import AchievementNotifications from "../components/AchievementNotifications";

export default function App() {
  const setCount = useSetRecoilState(countState);

  // ** DISABLED: on app start check if game progress is on server and if so, use it **
  useEffect(() => {
    // startGame();
  }, []);

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

      <AchievementNotifications />
    </>
  );
}

async function startGame() {
  const user_id = localStorage.getItem("user_id");
  const setCount = useSetRecoilState(countState);
  const setIsSaveOnServer = useSetRecoilState(isSaveOnServerState);

  if (user_id) {
    const saved_count = await fetchProgress(user_id);

    if (saved_count) {
      setCount(saved_count);
      setIsSaveOnServer(true);
    }
  } else {
    const new_user_id = createUserId();
    await saveUserOnServer(new_user_id);
    localStorage.setItem("user_id", new_user_id);
  }
}

async function fetchProgress(user_id) {
  const endpoint = `<host>/api/v1/progress/${user_id}`;
  const response = await fetch(endpoint);
  const save = await response.json();
  return save.click_count;
}

function createUserId() {
  const id = Math.floor(Math.random() * 16777215).toString(16);
  return id;
}

async function saveUserOnServer(user_id) {
  const endpoint = `<host>/api/v1/progress/${user_id}`;
  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id }),
  });
}
