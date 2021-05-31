import { useSetRecoilState } from "recoil";
import { countState } from "../atoms";

export default function ServerLoad() {
  return (
    <button disabled onClick={handleLoadFromServer}>
      Load from server
    </button>
  );
}

async function handleLoadFromServer() {
  const setCount = useSetRecoilState(countState);

  const user_id = localStorage.getItem("user_id");
  const endpoint = `<host>/api/v1/progress/${user_id}`;

  const save = await fetch(endpoint);
  setCount(save);
}
