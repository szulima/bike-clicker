import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { countState } from "../atoms";

export default function TabTitle() {
  const count = useRecoilValue(countState);

  function setTitle(count) {
    const bikeString = count === 1 ? "bike" : "bikes";
    document.title = `${count} ${bikeString} | Bike Clicker`;
  }

  useEffect(() => {
    setTitle(count);
  });

  return null;
}
