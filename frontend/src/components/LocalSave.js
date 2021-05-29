import { useRecoilValue } from "recoil";
import { countState } from "../atoms";

export default function LocalSave() {
  const count = useRecoilValue(countState);

  function handleSaveLocally() {
    localStorage.setItem("save", count);
  }
  return <button onClick={handleSaveLocally}>Save Game Locally</button>;
}
