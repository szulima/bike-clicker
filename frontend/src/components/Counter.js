import { useRecoilValue } from "recoil";
import { countState } from "../atoms";

export default function Counter() {
  const count = useRecoilValue(countState);

  return (
    <>
      <p>Bikes: {count}</p>
    </>
  );
}
