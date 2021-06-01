import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect } from "react";
import { countState, notificationsState } from "../atoms";

export default function AchievementNotifications() {
  const count = useRecoilValue(countState);
  const [notifications, setNotifications] = useRecoilState(notificationsState);

  const achievements = [
    {
      id: 1,
      condition: count === 0,
      name: "Start a game",
    },
    {
      id: 2,
      condition: count === 1,
      name: "Wake and bike!",
    },
  ];

  useEffect(() => {
    function checkConditions() {
      let newNotifications = [];
      achievements.forEach((a) => {
        if (a.condition) newNotifications.unshift(a);
      });
      return newNotifications;
    }
    const newNotifications = checkConditions();
    setNotifications((notifications) => notifications.concat(newNotifications));
  }, [count]);

  function handleRemoveFromNotifications(e) {
    const id = e.target.parentElement.id;
    const newNotifications = notifications.filter((n) => n.id != id);
    setNotifications(newNotifications);
  }

  return (
    <>
      {notifications.map((n) => (
        <div key={n.id} id={n.id}>
          <h3>Achievement unlocked</h3>
          <p>{n.name}</p>
          <span onClick={handleRemoveFromNotifications}>X</span>
        </div>
      ))}
    </>
  );
}
