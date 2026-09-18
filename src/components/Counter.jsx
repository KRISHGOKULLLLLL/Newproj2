import { useState } from "react";

function Counter() {
  // count stores the current number
  // setCount changes the number
  const [count, setCount] = useState(0);

  return (
    <section className="card">
      <h2>🔢 Counter</h2>

      <p>Current count:</p>

      <div className="count">{count}</div>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>
          + Increase
        </button>

        <button onClick={() => setCount(count - 1)}>
          - Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;
