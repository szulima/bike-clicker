import { useRecoilValue } from "recoil";
import { countState } from "../atoms";

export default function Level() {
  const count = useRecoilValue(countState);

  const level = (count) => {
    if (count < 10) return 1;
    if (count < 20) return 2;
    if (count < 40) return 3;
    if (count < 80) return 4;
    if (count < 130) return 5;
    if (count < 190) return 6;
    if (count >= 190) return 7;
  };

  return (
    <>
      <p>Your level: {level(count)}</p>
    </>
  );
}
