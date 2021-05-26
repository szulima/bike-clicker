import { useRecoilValue } from "recoil";
import { countState } from "../atoms";

export default function Clicker() {
  const clicks = useRecoilValue(countState);

  return (
    <>
      <p>Clicks: {clicks}</p>
    </>
  );
}
