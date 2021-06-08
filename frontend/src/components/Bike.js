import { useRecoilState, useSetRecoilState } from "recoil";
import { countState, cumulativeCountState } from "../atoms";
import bike from "../assets/bike.png";

export default function Bike() {
  const [count, setCount] = useRecoilState(countState);
  const setCumulativeCount = useSetRecoilState(cumulativeCountState);

  function handleBikeClick(e) {
    setCount(count + 1);
    setCumulativeCount(count + 1);
  }

  return (
    <>
      <img src={bike} alt="bike" width="200" onClick={handleBikeClick} />
    </>
  );
}
