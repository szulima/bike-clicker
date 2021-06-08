import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect } from "react";
import {
  notificationsState,
  achievementsState,
  cumulativeCountState,
} from "../atoms";

export default function AchievementNotifications() {
  const cumulativeCount = useRecoilValue(cumulativeCountState);
  const [notifications, setNotifications] = useRecoilState(notificationsState);
  const achievements = useRecoilValue(achievementsState);

  useEffect(() => {
    function checkConditions() {
      let newNotifications = [];
      achievements.forEach((a) => {
        if (a.condition) {
          newNotifications.unshift(a);
        }
      });
      return newNotifications;
    }
    const newNotifications = checkConditions();
    setNotifications((notifications) => notifications.concat(newNotifications));
  }, [cumulativeCount]);

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
