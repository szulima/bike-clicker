import { useRecoilValue } from "recoil";
import { countState } from "../atoms";

export default function SaveProgress() {
  const count = useRecoilValue(countState);

  function saveProgress() {
    localStorage.setItem("save", count);
  }
  return <button onClick={saveProgress}>Save Progress Locally</button>;
}
