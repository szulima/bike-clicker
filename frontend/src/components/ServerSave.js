import { useRecoilState, useRecoilValue } from "recoil";
import { isSaveOnServerState, countState } from "../atoms";

export default function ServerSave() {
  const [isSaveOnServer, setIsSaveOnServer] = useRecoilState(
    isSaveOnServerState
  );
  const count = useRecoilValue(countState);
  const user_id = localStorage.getItem("user_id");

  async function handleServerSave() {
    const endpoint = `<host>/api/v1/progress/${user_id}`;
    if (isSaveOnServer) {
      // PATCH progress
      await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          click_count: count,
        }),
      });
    } else {
      // POST progress
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          click_count: count,
        }),
      });
      setIsSaveOnServer(true);
    }
  }

  return (
    <button disabled onClick={handleServerSave}>
      Save On Server
    </button>
  );
}
