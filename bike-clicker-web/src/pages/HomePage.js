import { useRecoilState } from "recoil";
import { countState } from "../atoms";
import Clicker from "../components/Clicker";
import bike from "../assets/bike.png";

export default function HomePage() {
  const [clicks, setClicks] = useRecoilState(countState);

  function handleBikeClick(e) {
    setClicks(clicks + 1);
  }

  return (
    <>
      <h1>Home page</h1>
      <img src={bike} alt="bike" width="200" onClick={handleBikeClick} />
      <Clicker />
    </>
  );
}
