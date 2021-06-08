import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useRef } from "react";
import { countState, passiveIncomeState, cumulativeCountState } from "../atoms";

export default function Counter() {
  const [count, setCount] = useRecoilState(countState);
  let passiveIncome = useRecoilValue(passiveIncomeState);
  const [cumulativeCount, setCumulativeCount] = useRecoilState(
    cumulativeCountState
  );

  useInterval(() => {
    setCount(count + passiveIncome);
    setCumulativeCount(cumulativeCount + passiveIncome);
  }, 1000);

  return (
    <>
      <p>Bikes: {count}</p>
    </>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
