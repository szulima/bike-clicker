import { useRecoilState } from "recoil";
import { useEffect, useRef } from "react";
import { countState } from "../atoms";

export default function Counter() {
  const [count, setCount] = useRecoilState(countState);

  useInterval(() => {
    setCount(count + 1);
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
