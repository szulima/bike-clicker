import { useRecoilValue } from "recoil";
import { achievementsState } from "../atoms";
import questionMark from "../assets/question.png";

export default function AchievementsPage() {
  const achievements = useRecoilValue(achievementsState);

  return (
    <>
      <h1>Achievements</h1>
      <div className="achievements">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`achievement achievement-${achievement.id}`}
          >
            {achievement.achievementCondition ? (
              <>
                <img
                  src={achievement.image}
                  alt={achievement.name}
                  height="30"
                  onMouseOver={showTooltip}
                  onMouseOut={hideTooltip}
                />
                <div className="tooltip" hidden>
                  <h3>{achievement.name}</h3>
                  <p>[Achievement][Unlocked]</p>
                  <p>{achievement.what}</p>
                </div>
              </>
            ) : (
              <>
                <img
                  src={questionMark}
                  alt="question mark"
                  height="30"
                  onMouseOver={showTooltip}
                  onMouseOut={hideTooltip}
                />
                <div className="tooltip" hidden>
                  <h3>?</h3>
                  <p>[Achievement][Locked]</p>
                  <p>???</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function showTooltip(e) {
  const tooltip = e.target.nextElementSibling;
  tooltip.style.display = "block";
}

function hideTooltip(e) {
  const tooltip = e.target.nextElementSibling;
  tooltip.style.display = "none";
}
