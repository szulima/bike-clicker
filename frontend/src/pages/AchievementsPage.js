import { useRecoilValue } from "recoil";
import { countState } from "../atoms";
import questionMark from "../assets/question.png";
import screwdriver from "../assets/screwdriver.png";

export default function AchievementsPage() {
  const count = useRecoilValue(countState);

  return (
    <>
      <h1>Achievements</h1>
      <div className="achievements">
        <div className="achievement achievement-1">
          {count < 1 ? (
            <img src={questionMark} alt="question mark" height="30" />
          ) : (
            <>
              <img
                src={screwdriver}
                alt="screwdriver and wrench"
                height="30"
                onMouseOver={showTooltip}
                onMouseOut={hideTooltip}
              />
              <div className="tooltip" hidden>
                <h3>Wake and bike</h3>
                <p>[Achievement][Unlocked]</p>
                <p>Build 1 bike</p>
              </div>
            </>
          )}
        </div>
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
