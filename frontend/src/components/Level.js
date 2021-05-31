import { useRecoilValue } from "recoil";
import { countState } from "../atoms";

export default function Level() {
  const count = useRecoilValue(countState);

  return <p>Your level: {calculateLevel(count)}</p>;
}

function calculateLevel(count) {
  for (let x = 0; x <= count; x++) {
    const threshold = 2 ** x * 10;
    if (count < threshold) return x + 1;
  }
}
