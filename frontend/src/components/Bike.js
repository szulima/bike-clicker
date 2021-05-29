import { useRecoilState } from "recoil";
import { countState } from "../atoms";
import bike from "../assets/bike.png";

export default function Bike() {
  const [count, setCount] = useRecoilState(countState);

  function handleBikeClick(e) {
    setCount(count + 1);
  }

  return (
    <>
      <img src={bike} alt="bike" width="200" onClick={handleBikeClick} />
    </>
  );
}
