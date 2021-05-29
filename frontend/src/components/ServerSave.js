import { useRecoilValue } from "recoil";
import { isSaveOnServerState, countState } from "../atoms";

export default function ServerSave() {
  const isSaveOnServer = useRecoilValue(isSaveOnServerState);
  const count = useRecoilValue(countState);

  async function handleServerSave() {
    const endpoint = `<host>/api/v1/progress`;
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
    }
  }

  return (
    <button disabled onClick={handleServerSave}>
      Save On Server
    </button>
  );
}
