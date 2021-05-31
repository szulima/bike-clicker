import { useRecoilValue } from "recoil";
import { countState } from "../atoms";

export default function Level() {
  const count = useRecoilValue(countState);

  const level = (count) => {
    for (let x = 0; x < count; x++) {
      const threshold = 2 ** x * 10;
      if (count < threshold) return x;
    }
  };

  return (
    <>
      <p>Your level: {level(count)}</p>
    </>
  );
}
