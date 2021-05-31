import { useRecoilValue } from "recoil";
import { countState } from "../atoms";

export default function Level() {
  const count = useRecoilValue(countState);

  const level = (count) => {
    for (let level = 0; level < count; level++) {
      const threshold = 2 ** level * 10;
      if (count < threshold) return level;
    }
  };

  return (
    <>
      <p>Your level: {level(count)}</p>
    </>
  );
}
