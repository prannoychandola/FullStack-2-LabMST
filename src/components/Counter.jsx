import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

function Counter() {

  const MIN = 0;
  const MAX = 10;

  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < MAX) {
      setCount(count + 1);
    } else {
      alert("Maximum limit reached");
    }
  };

  const decrement = () => {
    if (count > MIN) {
      setCount(count - 1);
    } else {
      alert("Minimum limit reached");
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <CounterDisplay count={count} />
      <CounterButtons
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    </div>
  );
}

export default Counter;